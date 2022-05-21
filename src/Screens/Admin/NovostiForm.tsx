import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputController } from "../../Components/Form/InputController";
import { createNews, updateNews } from "../../Services/newsApi";

export interface NovostiFormProps {
  handleClose?(): void;
  oldState?: any;
  isNew: boolean;
}

export const NovostiForm = ({
  isNew,
  oldState,
  handleClose,
}: NovostiFormProps) => {
  const { control, handleSubmit, reset } = useForm();

  console.log(oldState, "molim lijepo");

  useEffect(() => {
    if (!isNew) {
      reset(oldState);
    }
  }, [oldState, isNew, reset]);

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      isNew
        ? await createNews(data)
        : await updateNews(oldState.id, {
            ...oldState,
            title: data.title,
            body: data.body,
          });
      handleClose && handleClose();
    })();
  };

  return (
    <Box paddingX={2}>
      <InputController
        control={control}
        name="title"
        label="Naslov"
        placeholder={"Upišite naslov"}
      />
      <InputController
        isTextArea
        control={control}
        name="body"
        label="Članak"
        placeholder={"Upišite članak"}
      />
      <Button
        colorScheme="blue"
        width="100%"
        marginTop={2}
        onClick={() => onHandleSubmit()}
      >
        {isNew ? "Dodaj članak" : "Izmijeni članak"}
      </Button>
    </Box>
  );
};

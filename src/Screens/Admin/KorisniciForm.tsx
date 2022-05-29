import _ from "lodash";
import { useForm } from "react-hook-form";
import { Box, Button, Checkbox } from "@chakra-ui/react";
import { CheckboxGroupController } from "../../Components/Form/CheckboxGroupController";
import { InputController } from "../../Components/Form/InputController";
import { AnimalSelectController } from "../../Components/Form/AnimalSelectController";
import { useEffect } from "react";
import { addUser } from "../../Services/userApi";

export interface KorisniciFormProps {
  handleClose(): void;
}

export const KorisniciForm = ({ handleClose }: KorisniciFormProps) => {
  const { control, handleSubmit, watch, setValue } = useForm();

  const isAdminChecked = !_.isEmpty(watch("isAdmin"));

  const onHandleSubmit = () => {
    handleSubmit(async (formData) => {
      console.log(formData.animalId);
      isAdminChecked
        ? await addUser(formData)
        : await addUser({
            ...formData,
            isAdmin: !_.isEmpty(formData.isAdmin),
            animalId: formData.animalId,
          });

      handleClose();
    })();
  };

  useEffect(() => {
    if (isAdminChecked) setValue("animal", null);
  }, [isAdminChecked, setValue]);

  return (
    <Box paddingX={2}>
      <InputController
        control={control}
        name="name"
        label="Korisničko ime"
        placeholder="Upišite korisničko ime"
      />
      <InputController
        control={control}
        name="password"
        label="Zaporka"
        placeholder="Upišite zaporku"
      />
      <CheckboxGroupController
        control={control}
        name="isAdmin"
        label="Administrator"
      >
        <Checkbox value="true">Admin</Checkbox>
      </CheckboxGroupController>
      {!isAdminChecked && (
        <AnimalSelectController
          control={control}
          name="animalId"
          label="Životinja"
        />
      )}
      <Button
        colorScheme="blue"
        width="100%"
        marginTop={2}
        onClick={() => onHandleSubmit()}
      >
        Dodaj korisnika
      </Button>
    </Box>
  );
};

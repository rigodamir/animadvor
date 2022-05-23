import { Box, Button, Radio } from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Dob,
  Personality,
  Size,
  Spol,
} from "../../Components/AnimalCard/types";
import { InputController } from "../../Components/Form/InputController";
import { RadioGroupController } from "../../Components/Form/RadioGroupController";
import { createAnimal, updateAnimal } from "../../Services/animalApi";

export interface ZivotinjeFormProps {
  handleClose(): void;
  oldState?: any;
  isNew: boolean;
}

export const ZivotinjeForm = ({
  isNew,
  oldState,
  handleClose,
}: ZivotinjeFormProps) => {
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (!isNew) {
      reset(oldState);
    }
  }, [oldState, isNew, reset]);

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      isNew ? await createAnimal(data) : await updateAnimal(oldState.id, data);
      handleClose && handleClose();
    })();
  };

  return (
    <Box paddingX={2}>
      <InputController
        control={control}
        name="name"
        label="Naslov"
        placeholder={"Upišite naslov"}
      />
      <InputController
        isTextArea
        control={control}
        name="bodyText"
        label="Članak"
        placeholder={"Upišite opis"}
      />
      <RadioGroupController
        direction="row"
        control={control}
        name="age"
        label="Dob"
      >
        <Radio value={Dob.stene}>Štene</Radio>
        <Radio value={Dob.mladi}>Mladi</Radio>
        <Radio value={Dob.odrastao}>Odrastao</Radio>
      </RadioGroupController>

      <RadioGroupController
        direction="row"
        control={control}
        name="gender"
        label="Spol"
      >
        <Radio value={Spol.musko}>Muško</Radio>
        <Radio value={Spol.zensko}>Žensko</Radio>
      </RadioGroupController>

      <RadioGroupController
        direction="row"
        control={control}
        name="size"
        label="Veličina"
      >
        <Radio value={Size.veliki}>Veliki</Radio>
        <Radio value={Size.srednji}>Srednji</Radio>
        <Radio value={Size.manji}>Manji</Radio>
      </RadioGroupController>

      <RadioGroupController
        direction="row"
        control={control}
        name="personality"
        label="Veličina"
      >
        <Radio value={Personality.aktivni}>Aktivni</Radio>
        <Radio value={Personality.manjeAktivni}>Manje aktivni</Radio>
        <Radio value={Personality.plahi}>Plahi</Radio>
        <Radio value={Personality.socijalizirani}>Socijalizirani</Radio>
      </RadioGroupController>

      <Button
        colorScheme="blue"
        width="100%"
        marginTop={4}
        onClick={() => onHandleSubmit()}
      >
        {isNew ? "Dodaj životinju" : "Izmijeni životinju"}
      </Button>
    </Box>
  );
};

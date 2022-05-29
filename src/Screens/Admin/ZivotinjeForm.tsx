import { Button, Radio } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
import { uploadImage } from "../../Services/imageApi";
import { ImageModal } from "./ImageModal";
import { AiOutlineFileImage } from "react-icons/ai";

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
  const { control, handleSubmit, reset, setValue } = useForm();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    if (!isNew) {
      reset(oldState);
    }
  }, [oldState, isNew, reset]);

  const handleOpenImageModal = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      isNew ? await createAnimal(data) : await updateAnimal(oldState.id, data);
      handleClose && handleClose();
    })();
  };

  const handleUploadImages = async (images: any[]) => {
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const data = await uploadImage(image);
        return data;
      })
    );

    setValue("imageUrls", imageUrls);
  };

  return (
    <>
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
      {isNew && (
        <Button
          colorScheme="gray"
          marginTop={4}
          onClick={handleOpenImageModal}
          rightIcon={<AiOutlineFileImage />}
        >
          Dodaj slike
        </Button>
      )}

      <Button
        colorScheme="blue"
        width="100%"
        marginTop={4}
        onClick={() => onHandleSubmit()}
      >
        {isNew ? "Dodaj životinju" : "Izmijeni životinju"}
      </Button>

      {isNew && (
        <ImageModal
          isOpen={isImageModalOpen}
          closeModal={handleCloseImageModal}
          title="Dodaj Slike"
          handleUploadImage={handleUploadImages}
        />
      )}
    </>
  );
};

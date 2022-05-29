import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { InputController } from "../../Components/Form/InputController";
import { createNews, updateNews } from "../../Services/newsApi";
import { AiOutlineFileImage } from "react-icons/ai";
import { ImageModal } from "./ImageModal";
import { uploadImage } from "../../Services/imageApi";

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
      {isNew && (
        <Button
          colorScheme="gray"
          marginTop={2}
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
        {isNew ? "Dodaj članak" : "Izmijeni članak"}
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

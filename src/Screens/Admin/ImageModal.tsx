import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  theme,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Compressor from "compressorjs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

export interface ImageModalProps {
  title: string;
  isOpen: boolean;
  closeModal(): void;
}

export const ImageModal = ({ title, isOpen, closeModal }: ImageModalProps) => {
  const [formImages, setFormImages] = useState<any[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    maxFiles: 6,
    onDrop: (acceptedFiles) => {
      if (formImages.length <= 6) {
        acceptedFiles.map((file) => {
          const image = Object.assign(file, {
            preview: URL.createObjectURL(file),
          });
          new Compressor(image, {
            quality: 0.8,
            success: (compressedImage) => {
              setFormImages((formImages) => [...formImages, compressedImage]);
            },
            error: (error) => {
              console.log(error);
            },
          });
        });
      }
    },
  });

  const deleteImage = (preview: string) => {
    setFormImages((formImages) =>
      formImages.filter((image) => image.preview !== preview)
    );
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={closeModal}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={closeModal} />
        <ModalBody>
          <div
            style={{
              height: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 20,
            }}
            {...getRootProps({ className: "dropzone" })}
          >
            <input {...getInputProps()} />
            <Box display="flex" flexDir="column" alignItems="center">
              <Text textAlign="center" color="gray.400">
                Pritisnite ili povucite slike unutar polja
              </Text>
              <Text
                fontSize="small"
                color={formImages.length < 6 ? "gray.400" : "red.400"}
                marginBottom={2}
              >
                Maksimalni broj slika je 6
              </Text>
              <AiOutlineCaretDown color={theme.colors.gray[400]} size={24} />
            </Box>
          </div>
          <Grid
            flex={4}
            templateColumns="repeat(4, 1fr)"
            gap={10}
            marginBottom={5}
          >
            {formImages.map((file: Blob | MediaSource) => {
              const image = Object.assign(file, {
                preview: URL.createObjectURL(file),
              });
              return (
                <GridItem
                  colSpan={1}
                  cursor="pointer"
                  onClick={() => deleteImage(image.preview)}
                >
                  <TiDelete
                    style={{
                      position: "absolute",
                      color: theme.colors.gray[900],
                    }}
                    size={22}
                  />
                  <Image
                    src={image.preview}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                  />
                </GridItem>
              );
            })}
          </Grid>
          <ModalFooter>
            <Button colorScheme="gray" mr={5} onClick={closeModal}>
              Odustani
            </Button>
            <Button colorScheme="blue">Spremi</Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

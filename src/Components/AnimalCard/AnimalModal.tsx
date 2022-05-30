import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Animal } from "./types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import _ from "lodash";

export interface AnimalModalProps {
  animal: Animal | null;
  isOpen: boolean;
  handleClose(): void;
}

export const AnimalModal = ({
  animal,
  handleClose,
  isOpen,
}: AnimalModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{animal?.name}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          {!_.isEmpty(animal?.imageUrls) && (
            <AliceCarousel
              mouseTracking
              items={animal?.imageUrls?.map((url, index) => (
                <img
                  src={url}
                  onDragStart={(e) => e.preventDefault()}
                  role="presentation"
                  alt={index.toString()}
                />
              ))}
            />
          )}
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="lg"
            textTransform="uppercase"
            mb={2}
          >
            {animal?.size} &bull; {animal?.age} &bull; {animal?.gender} &bull;{" "}
            {animal?.personality}
          </Text>
          <Text>{animal?.bodyText}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

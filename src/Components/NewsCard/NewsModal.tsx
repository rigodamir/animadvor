import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { News } from "./types";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import _ from "lodash";

export interface NewsModalProps {
  news: News | null;
  isOpen: boolean;
  handleClose(): void;
}

export const NewsModal = ({ news, isOpen, handleClose }: NewsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{news?.title}</ModalHeader>
        <ModalCloseButton onClick={handleClose} />
        <ModalBody>
          {!_.isEmpty(news?.imageUrls) && (
            <AliceCarousel
              mouseTracking
              items={news?.imageUrls?.map((url, index) => (
                <img
                  src={url}
                  onDragStart={(e) => e.preventDefault()}
                  role="presentation"
                  alt={index.toString()}
                />
              ))}
            />
          )}

          <Text>{news?.body}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

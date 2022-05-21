import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export interface AlertModalProps {
  isOpen: boolean;
  handleClose(): void;
  title: string;
  text: string;
  onPress(item: any): void;
}

export const AlertModal = ({
  title,
  text,
  isOpen,
  handleClose,
}: AlertModalProps) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={handleClose}
      leastDestructiveRef={undefined}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{text}</AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={handleClose}>Cancel</Button>
            <Button colorScheme="red" onClick={handleClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

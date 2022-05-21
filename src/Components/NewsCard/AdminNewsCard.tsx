import { Box, Text, theme } from "@chakra-ui/react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export interface AdminNewsCardProps {
  title: string;
  body: string;
  onUpdate(): void;
  onDelete(): void;
}

export const AdminNewsCard = ({
  title,
  body,
  onUpdate,
  onDelete,
}: AdminNewsCardProps) => {
  return (
    <Box
      maxW="400"
      minW="300"
      my={10}
      mx={5}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius={10}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box p={5}>
        <Text fontSize="larger" fontWeight="bold">
          {title}
        </Text>
        <Text noOfLines={4}>{body}</Text>
      </Box>
      <Box
        borderRightRadius={8}
        padding="2"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <AiOutlineEdit size={24} onClick={onUpdate} />
        <AiOutlineDelete
          size={24}
          color={theme.colors.red[400]}
          onClick={onDelete}
        />
      </Box>
    </Box>
  );
};

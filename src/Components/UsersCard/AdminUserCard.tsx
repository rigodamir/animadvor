import { Box, Text } from "@chakra-ui/react";

export interface AdminUserCard {
  name: string;
  isAdmin: boolean;
}

export const AdminUserCard = ({ name, isAdmin }: AdminUserCard) => {
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
      <Box
        p={5}
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Text fontSize="larger" fontWeight="bold">
          {name}
        </Text>
        <Text>{isAdmin && "Admin"}</Text>
      </Box>
      <Box
        borderRightRadius={8}
        padding="2"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      ></Box>
    </Box>
  );
};

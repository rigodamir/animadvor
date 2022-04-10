import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavigationButtons = () => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between">
      <Link to="/">
        <Text color="white" mx="2" fontSize="large">
          Početna
        </Text>
      </Link>
      <Link to="/onama">
        <Text color="white" mx="2" fontSize="large">
          O nama
        </Text>
      </Link>
      <Text color="white" mx="2" fontSize="large">
        Novosti
      </Text>
      <Text color="white" mx="2" fontSize="large">
        Donacije
      </Text>
      <Text color="white" mx="2" fontSize="large">
        Kontakti
      </Text>
    </Box>
  );
};

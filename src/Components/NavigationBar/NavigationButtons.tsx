import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NavigationButtons = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "space-between" }}
    >
      <Link to="/">
        <Text
          color="white"
          mx="2"
          fontSize="large"
          textAlign="center"
          mt={{ base: "2", md: "0" }}
        >
          Početna
        </Text>
      </Link>
      <Link to="/onama">
        <Text
          color="white"
          mx="2"
          fontSize="large"
          textAlign="center"
          mt={{ base: "2", md: "0" }}
        >
          O nama
        </Text>
      </Link>
      <Link to="/novosti">
        <Text
          color="white"
          mx="2"
          fontSize="large"
          textAlign="center"
          mt={{ base: "2", md: "0" }}
        >
          Novosti
        </Text>
      </Link>
      <Link to="/zivotinje">
        <Text
          color="white"
          mx="2"
          fontSize="large"
          textAlign="center"
          mt={{ base: "2", md: "0" }}
        >
          Životinje
        </Text>
      </Link>
      <Text
        color="white"
        mx="2"
        fontSize="large"
        textAlign="center"
        mt={{ base: "2", md: "0" }}
      >
        Donacije
      </Text>
      <Link to="/kontakt">
        <Text
          color="white"
          mx="2"
          fontSize="large"
          textAlign="center"
          mt={{ base: "2", md: "0" }}
        >
          Kontakt
        </Text>
      </Link>
    </Box>
  );
};

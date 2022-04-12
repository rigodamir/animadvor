import { Box, Text } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";
import { ReactComponent as AnimadvorHeader } from "../../Assets/vectors/animadvorHeader.svg";

export const NavigationBar = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      py="5"
      px="5"
      backgroundColor="#205072"
    >
      <Box mb={{ base: "5", md: "0" }}>
        <AnimadvorHeader style={{ width: 120, height: 40 }} />
      </Box>
      <NavigationButtons />
      <Text color="white" mx="2" fontSize="large" mt={{ base: "2", md: "0" }}>
        Prijava
      </Text>
    </Box>
  );
};

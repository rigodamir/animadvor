import { Box, Text } from "@chakra-ui/react";
import { NavigationButtons } from "./NavigationButtons";
import { ReactComponent as AnimadvorHeader } from "../../Assets/vectors/animadvorHeader.svg";

export const NavigationBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      py="5"
      px="5"
      backgroundColor="#205072"
    >
      <AnimadvorHeader style={{ width: 120, height: 40 }} />
      <NavigationButtons />
      <Text color="white">Udomi me</Text>
    </Box>
  );
};

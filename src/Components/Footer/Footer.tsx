import { Box, Text } from "@chakra-ui/react";
import { ReactComponent as AnimadvorLogo } from "../../Assets/vectors/animadvorLogo.svg";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor="#205072"
      alignItems="center"
      px={10}
      width="100%"
      mt={10}
    >
      <AnimadvorLogo style={{ width: 100, height: 100 }} />
      <Text color="white" fontSize="sm">
        © COPYRIGHT 2022 | Udruga za zaštitu životinja Anima Dvor | ALL RIGHTS
      </Text>
      <FaFacebook
        color="white"
        size={34}
        style={{ cursor: "pointer" }}
        onClick={() => {
          window.open(
            "https://www.facebook.com/Udruga-za-zastitu-zivotinja-Anima-Dvor-1688094701418647/"
          );
        }}
      />
    </Box>
  );
};

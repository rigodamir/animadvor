import { Box, Text, Center } from "@chakra-ui/react";
import { Footer } from "../../Components/Footer/Footer";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";

export const ContactScreen = () => {
  return (
    <>
      <NavigationBar />
      <Center>
        <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
          <Text fontWeight="bold" fontSize="4xl" mb={10} textAlign="center">
            Kontakt
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              flex={2}
              height={400}
              mr={{ base: 0, md: 10 }}
              mb={{ base: 5, md: 2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.0778549881584!2d16.336860280201297!3d45.084214327249015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1c1d05ccd6c22a34!2zNDXCsDA1JzAzLjIiTiAxNsKwMjAnMTcuNiJF!5e0!3m2!1sen!2shr!4v1649609829197!5m2!1sen!2shr"
                width="100%"
                height="100%"
                aria-hidden="false"
                title="maps"
              />
            </Box>
            <Box flex={1} alignItems="center">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontWeight="semibold" fontSize="large">
                  Adresa
                </Text>
                <Text fontSize="large">Vanići 44, 44440 Dvor</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontWeight="semibold" fontSize="large">
                  E-mail
                </Text>
                <Text fontSize="large">animadvor@gmail.com</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontWeight="semibold" fontSize="large">
                  Telefonski broj
                </Text>
                <Text fontSize="large">091/422-0063</Text>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Text fontWeight="semibold" fontSize="large">
                  IBAN
                </Text>
                <Text fontSize="large">HR5224070001100005210</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

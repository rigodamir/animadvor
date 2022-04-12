import { Box, Center, Text, Image } from "@chakra-ui/react";
import { p1, p2, p3, p4, p5, p6 } from "./consts";

export const AboutUs = () => {
  return (
    <Center>
      <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
        <Text fontWeight="bold" fontSize="4xl">
          O nama
        </Text>
        <Box alignItems="center">
          <Box flex="1">
            <Text my={5}>{p1}</Text>
            <Text my={5}>{p2}</Text>
            <Text my={5}>{p3}</Text>
            <Text my={5}>{p4}</Text>
            <Text my={5}>{p5}</Text>
            <Text my={5}>{p6}</Text>
          </Box>
          <Box flex="2" mt={10}>
            <Image
              src={require("../../Assets/images/aboutUs1.jpeg")}
              height="40vh"
              style={{ objectFit: "cover", width: "100%" }}
            />
            <Box
              display="flex"
              flexDirection={{ md: "row", base: "column" }}
              justifyContent="space-between"
              mt={5}
            >
              <Image
                src={require("../../Assets/images/aboutUs2.jpeg")}
                width={{ md: "49%", base: "100%" }}
              />
              <Image
                src={require("../../Assets/images/aboutUs3.jpeg")}
                width={{ md: "49%", base: "100%" }}
                mt={{ base: 5, md: 0 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Center>
  );
};

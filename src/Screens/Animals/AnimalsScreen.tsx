import { Center, Box, Text, Checkbox, Grid } from "@chakra-ui/react";
import { AnimalCard } from "../../Components/AnimalCard/AnimalCard";
import { Footer } from "../../Components/Footer/Footer";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";
import { animals } from "./consts";

export const AnimalsScreen = () => {
  return (
    <>
      <NavigationBar />
      <Center>
        <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
          <Text
            fontWeight="bold"
            fontSize="4xl"
            mb={10}
            textAlign={{ base: "center", md: "left" }}
          >
            Životinje
          </Text>
          <Center>
            <Box
              width={{ md: "100%" }}
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                flex={1}
                alignItems="flex-start"
              >
                <Text fontWeight="semibold" fontSize="larger" mb={5}>
                  Filteri
                </Text>
                <Text fontSize="large" my={2}>
                  Veličine
                </Text>
                <Checkbox>Veliki</Checkbox>
                <Checkbox>Srednji</Checkbox>
                <Checkbox>Manji</Checkbox>
                <Text fontSize="large" my={2}>
                  Aktivnost
                </Text>
                <Checkbox>Aktivni</Checkbox>
                <Checkbox>Manje aktivni</Checkbox>
                <Checkbox>Plahi</Checkbox>
                <Checkbox>Socijalizirani</Checkbox>
                <Text fontSize="large" my={2}>
                  Spol
                </Text>
                <Checkbox>Muško</Checkbox>
                <Checkbox>Žensko</Checkbox>
                <Text fontSize="large" my={2}>
                  Dob
                </Text>
                <Checkbox>Štene</Checkbox>
                <Checkbox>Mladi</Checkbox>
                <Checkbox>Odrastao</Checkbox>
              </Box>

              <Grid
                mt={{ base: 5, md: 0 }}
                flex={4}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
              >
                {animals.map((animal) => {
                  return (
                    <AnimalCard
                      name={animal.name}
                      bodyText={animal.bodyText}
                      imageUrl={animal.imageUrl}
                      age={animal.age}
                      gender={animal.gender}
                      size={animal.size}
                      personality={animal.personality}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Center>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

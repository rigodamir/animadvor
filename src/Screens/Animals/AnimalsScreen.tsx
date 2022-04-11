import { Center, Box, Text, Checkbox, Divider, Grid } from "@chakra-ui/react";
import { AnimalCard } from "../../Components/AnimalCard/AnimalCard";
import { animals } from "./consts";

export const AnimalsScreen = () => {
  return (
    <Center>
      <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
        <Text fontWeight="bold" fontSize="4xl" mb={10}>
          Životinje
        </Text>
        <Box display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column" flex={1}>
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
          <Grid flex={4} templateColumns="repeat(3, 1fr)">
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
      </Box>
    </Center>
  );
};

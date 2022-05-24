import {
  Center,
  Box,
  Text,
  Checkbox,
  Grid,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimalCard } from "../../Components/AnimalCard/AnimalCard";
import {
  Animal,
  Dob,
  Personality,
  Size,
  Spol,
} from "../../Components/AnimalCard/types";
import { Footer } from "../../Components/Footer/Footer";
import { CheckboxGroupController } from "../../Components/Form/CheckboxGroupController";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";
import { getAnimals } from "../../Services/animalApi";

export const AnimalsScreen = () => {
  const [animals, setAnimals] = useState<any>();
  const { control, handleSubmit } = useForm();

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      console.log(data);
      const filteredAnimals = await getAnimals(0, data);

      setAnimals(filteredAnimals);
    })();
  };

  useEffect(() => {
    const getScreenAnimals = async () => {
      const data = await getAnimals(0);

      setAnimals(data);
    };

    getScreenAnimals();
  }, []);

  return (
    <>
      <NavigationBar />
      <Center>
        <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
          <Text fontWeight="bold" fontSize="4xl" mb={10} textAlign="center">
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
                <CheckboxGroupController
                  control={control}
                  name="size"
                  label="Veličine"
                >
                  <Checkbox value={Size.veliki}>Veliki</Checkbox>
                  <Checkbox value={Size.srednji}>Srednji</Checkbox>
                  <Checkbox value={Size.manji}>Manji</Checkbox>
                </CheckboxGroupController>
                <CheckboxGroupController
                  control={control}
                  name="personality"
                  label="Aktivnost"
                >
                  <Checkbox value={Personality.aktivni}>Aktivni</Checkbox>
                  <Checkbox value={Personality.manjeAktivni}>
                    Manje aktivni
                  </Checkbox>
                  <Checkbox value={Personality.plahi}>Plahi</Checkbox>
                  <Checkbox value={Personality.socijalizirani}>
                    Socijalizirani
                  </Checkbox>
                </CheckboxGroupController>

                <CheckboxGroupController
                  control={control}
                  name="gender"
                  label="Spol"
                >
                  <Checkbox value={Spol.musko}>Muško</Checkbox>
                  <Checkbox value={Spol.zensko}>Žensko</Checkbox>
                </CheckboxGroupController>
                <CheckboxGroupController
                  control={control}
                  name="age"
                  label="Dob"
                >
                  <Checkbox value={Dob.stene}>Štene</Checkbox>
                  <Checkbox value={Dob.mladi}>Mladi</Checkbox>
                  <Checkbox value={Dob.odrastao}>Odrastao</Checkbox>
                </CheckboxGroupController>
                <Divider w="80%" mt={2} />
                <Button colorScheme="blue" my={2} onClick={onHandleSubmit}>
                  Filtriraj
                </Button>
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
                {animals &&
                  animals.map((animal: Animal) => {
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

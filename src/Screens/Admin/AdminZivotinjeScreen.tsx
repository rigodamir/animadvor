import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AdminAnimalCard } from "../../Components/AnimalCard/AdminAnimalCard";
import { deleteAnimal, getAnimals } from "../../Services/animalApi";
import NavBar from "./NavBar";
import { ZivotinjeForm } from "./ZivotinjeForm";

export const AdminZivotinjeScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [oldAnimal, setOldAnimal] = useState({
    name: "",
    bodyText: "",
    age: "",
    gender: "",
    size: "",
    personality: "",
    _id: "",
  });
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    handleGetAnimals(0);
  }, []);

  const handleGetAnimals = async (pageNumber?: number) => {
    const data = await getAnimals(pageNumber);

    setAnimals(data);
  };

  const handleDeleteAnimals = async (id: number) => {
    await deleteAnimal(id);
    await handleGetAnimals();
  };

  const handleOpen = (item: any, isCreate: boolean) => {
    setIsNew(isCreate);
    setOldAnimal(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleGetAnimals();
  };

  return (
    <NavBar>
      <Drawer isOpen={isOpen} placement="right" onClose={() => {}} size="lg">
        <DrawerOverlay />
        <DrawerContent scrollBehavior="auto">
          <DrawerCloseButton onClick={handleClose} />
          <DrawerHeader borderBottomWidth="1px">
            Dodaj novu životinju
          </DrawerHeader>
          <ZivotinjeForm
            isNew={isNew}
            oldState={{
              name: oldAnimal.name,
              bodyText: oldAnimal.bodyText,
              age: oldAnimal.age,
              gender: oldAnimal.gender,
              size: oldAnimal.size,
              personality: oldAnimal.personality,
              id: oldAnimal._id,
            }}
            handleClose={handleClose}
          />
        </DrawerContent>
      </Drawer>
      <Box backgroundColor="white" borderRadius={10} padding="4">
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={"row"}
          alignItems="center"
        >
          <Text fontSize="3xl" fontWeight="semibold">
            Životinje
          </Text>
          <Button colorScheme="blue" onClick={() => handleOpen({}, true)}>
            Dodaj životinju
          </Button>
        </Box>
      </Box>
      <Box backgroundColor="white" borderRadius={10} padding="4" marginTop="4">
        {animals.map((item: any) => {
          return (
            <Box>
              <AdminAnimalCard
                title={item.name}
                bodyText={item.bodyText}
                onUpdate={() => handleOpen(item, false)}
                onDelete={() => handleDeleteAnimals(item._id)}
              />
              <Divider />
            </Box>
          );
        })}
      </Box>
    </NavBar>
  );
};

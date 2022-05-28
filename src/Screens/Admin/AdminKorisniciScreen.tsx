import {
  Box,
  Text,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AdminUserCard } from "../../Components/UsersCard/AdminUserCard";
import { getUsers } from "../../Services/userApi";
import { KorisniciForm } from "./KorisniciForm";
import NavBar from "./NavBar";

export const AdminKorisniciScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [korisnici, setKorisnici] = useState([]);

  useEffect(() => {
    handleGetUsers();
  }, []);

  const handleGetUsers = async () => {
    const data = await getUsers();

    setKorisnici(data);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = async () => {
    setIsOpen(false);
    await handleGetUsers();
  };

  return (
    <NavBar>
      <Drawer isOpen={isOpen} placement="right" onClose={() => {}} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={handleClose} />
          <DrawerHeader borderBottomWidth="1px">
            Napravi novog korisnika
          </DrawerHeader>
          <KorisniciForm handleClose={handleClose} />
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
            Korisnici
          </Text>
          <Button colorScheme="blue" onClick={handleOpen}>
            Dodaj korisnika
          </Button>
        </Box>
      </Box>
      <Box backgroundColor="white" borderRadius={10} padding="4" marginTop="4">
        {korisnici &&
          korisnici.map((item: any) => {
            return <AdminUserCard name={item.name} isAdmin={item.isAdmin} />;
          })}
      </Box>
    </NavBar>
  );
};

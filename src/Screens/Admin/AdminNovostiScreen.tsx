import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AdminNewsCard } from "../../Components/NewsCard/AdminNewsCard";
import { deleteNews, getNews } from "../../Services/newsApi";
import NavBar from "./NavBar";
import { NovostiForm } from "./NovostiForm";

export const AdminNovostiScreen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [oldNews, setOldNews] = useState({ title: "", body: "", _id: null });
  const [isNew, setIsNew] = useState(true);

  useEffect(() => {
    handleGetNews(0);
  }, []);

  const handleGetNews = async (pageNumber?: number) => {
    const data = await getNews(pageNumber);

    setNews(data);
  };

  const handleDeleteNews = async (id: any) => {
    await deleteNews(id);
    await handleGetNews();
  };

  const handleOpen = (item: any, isCreate: boolean) => {
    setIsNew(isCreate);
    setOldNews(item);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleGetNews();
  };

  return (
    <NavBar>
      <Drawer isOpen={isOpen} placement="right" onClose={() => {}} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={handleClose} />
          <DrawerHeader borderBottomWidth="1px">
            Napravi novi članak
          </DrawerHeader>
          <DrawerBody>
            <NovostiForm
              isNew={isNew}
              oldState={{
                title: oldNews.title,
                body: oldNews.body,
                id: oldNews._id,
              }}
              handleClose={handleClose}
            />
          </DrawerBody>
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
            Novosti
          </Text>
          <Button
            colorScheme="blue"
            onClick={() => handleOpen({ title: "", body: "" }, true)}
          >
            Dodaj članak
          </Button>
        </Box>
      </Box>
      <Box backgroundColor="white" borderRadius={10} padding="4" marginTop="4">
        {news.map((item: any) => {
          return (
            <Box>
              <AdminNewsCard
                title={item.title}
                body={item.body}
                onUpdate={() => handleOpen(item, false)}
                onDelete={() => handleDeleteNews(item._id)}
              />
              <Divider />
            </Box>
          );
        })}
      </Box>
    </NavBar>
  );
};

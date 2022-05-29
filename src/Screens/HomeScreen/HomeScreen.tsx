import { Box, Text, Input, Textarea, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AnimadvorLogo } from "../../Assets/vectors/animadvorLogo.svg";
import { Footer } from "../../Components/Footer/Footer";
import { HelperBadges } from "../../Components/HelperBadges/HelperBadges";
import { NavigationBar } from "../../Components/NavigationBar/NavigationBar";
import { NewsCard } from "../../Components/NewsCard/NewsCard";
import { getNews } from "../../Services/newsApi";

export const HomeScreen = () => {
  const text =
    "Dođite, upoznajte ih sve, provedite predivno vrijeme sa svim tim divnim njuškicama i nikad ne znate , možda baš neka od njih osvoji vaše srce i postane dio vaše obitelji.";

  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    const getScreenAnimals = async () => {
      const data = await getNews(0);

      setNews(data);
    };

    getScreenAnimals();
  }, []);

  return (
    <>
      <NavigationBar />
      <Center>
        <Box>
          <Box
            display="flex"
            flex={1}
            flexDirection={{ base: "column-reverse", md: "row" }}
            px={10}
            py={50}
            alignItems="center"
            maxW={1200}
            mb={20}
          >
            <Box maxW={{ base: "80%", md: "60%" }}>
              <Text fontWeight="bold" fontSize={{ base: "4xl", lg: "6xl" }}>
                Udruga za zaštitu životinja Anima Dvor
              </Text>
              <Text
                fontWeight="semibold"
                fontSize={{ base: "xl", md: "2xl" }}
                color="GrayText"
              >
                {text}
              </Text>
            </Box>
            <AnimadvorLogo />
          </Box>
          <HelperBadges />
          <Box px={10}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              px={16}
            >
              <Text fontWeight="bold" fontSize="4xl">
                Novosti
              </Text>
              <Link to="/novosti">
                {" "}
                <Text
                  backgroundColor="blue.500"
                  borderRadius={5}
                  px={3}
                  py={2}
                  color="white"
                >
                  Vidi sve
                </Text>
              </Link>
            </Box>
            <Center>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ base: "column", lg: "row" }}
              >
                {news &&
                  news.slice(0, 3).map((item: any) => {
                    return (
                      <NewsCard
                        body={item.body}
                        title={item.title}
                        imageUrls={item.imageUrls}
                      />
                    );
                  })}
              </Box>
            </Center>
            <Box>
              <Text textAlign="center" fontWeight="bold" fontSize="4xl" my={10}>
                Kontaktirajte Nas
              </Text>
              <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
                <Box flex="2">
                  <Input placeholder="Ime i prezime" mb={5} />
                  <Input placeholder="E-mail" mb={5} />
                  <Input
                    placeholder="Telefonski broj"
                    mb={{ base: 5, md: 0 }}
                  />
                </Box>
                <Box ml={{ base: 0, md: 5 }} flex="3">
                  <Textarea
                    placeholder="Poruka..."
                    resize="none"
                    minH="100%"
                    minW="100%"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Center>
      <Footer />
    </>
  );
};

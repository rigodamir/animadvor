import { Box, Grid, Center, Text } from "@chakra-ui/react";
import { NewsCard } from "../../Components/NewsCard/NewsCard";
import { news } from "./consts";

export const NewsScreen = () => {
  return (
    <Center>
      <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
        <Text fontWeight="bold" fontSize="4xl">
          Novosti
        </Text>
        <Grid templateColumns="repeat(3, 1fr)">
          {news.map((item) => {
            return (
              <NewsCard
                body={item.body}
                title={item.title}
                imageUrl={item.imageUrl}
              />
            );
          })}
        </Grid>
      </Box>
    </Center>
  );
};

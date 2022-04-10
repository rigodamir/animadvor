import { Box, Grid, Center, Text } from "@chakra-ui/react";
import { NewsCard } from "../../Components/NewsCard/NewsCard";

export const NewsScreen = () => {
  return (
    <Center>
      <Box flex={1} px={10} py={50} alignItems="center" maxW={1200}>
        <Text fontWeight="bold" fontSize="4xl">
          Novosti
        </Text>
        <Grid templateColumns="repeat(3, 1fr)">
          <NewsCard
            imageUrl={
              "https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562427_10227663307956020_8228504622204923481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Dpj4Q_aC9X4AX-m1XNm&_nc_ht=scontent-frx5-1.xx&oh=00_AT8e6LiHedJWFO0Gyqcr8qrb4XWBxce2ymb1U4V3jm9puA&oe=6258473A"
            }
            title="Lorem Ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ante eu felis faucibus congue. Pellentesque sollicitudin lacus at nisl ullamcorper, nec commodo augue imperdiet."
          />
          <NewsCard
            imageUrl={
              "https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562427_10227663307956020_8228504622204923481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Dpj4Q_aC9X4AX-m1XNm&_nc_ht=scontent-frx5-1.xx&oh=00_AT8e6LiHedJWFO0Gyqcr8qrb4XWBxce2ymb1U4V3jm9puA&oe=6258473A"
            }
            title="Lorem Ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ante eu felis faucibus congue. Pellentesque sollicitudin lacus at nisl ullamcorper, nec commodo augue imperdiet."
          />
          <NewsCard
            imageUrl={
              "https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562427_10227663307956020_8228504622204923481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Dpj4Q_aC9X4AX-m1XNm&_nc_ht=scontent-frx5-1.xx&oh=00_AT8e6LiHedJWFO0Gyqcr8qrb4XWBxce2ymb1U4V3jm9puA&oe=6258473A"
            }
            title="Lorem Ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ante eu felis faucibus congue. Pellentesque sollicitudin lacus at nisl ullamcorper, nec commodo augue imperdiet."
          />
          <NewsCard
            imageUrl={
              "https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562427_10227663307956020_8228504622204923481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Dpj4Q_aC9X4AX-m1XNm&_nc_ht=scontent-frx5-1.xx&oh=00_AT8e6LiHedJWFO0Gyqcr8qrb4XWBxce2ymb1U4V3jm9puA&oe=6258473A"
            }
            title="Lorem Ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ante eu felis faucibus congue. Pellentesque sollicitudin lacus at nisl ullamcorper, nec commodo augue imperdiet."
          />
          <NewsCard
            imageUrl={
              "https://scontent-frx5-1.xx.fbcdn.net/v/t39.30808-6/277562427_10227663307956020_8228504622204923481_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=Dpj4Q_aC9X4AX-m1XNm&_nc_ht=scontent-frx5-1.xx&oh=00_AT8e6LiHedJWFO0Gyqcr8qrb4XWBxce2ymb1U4V3jm9puA&oe=6258473A"
            }
            title="Lorem Ipsum"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu ante eu felis faucibus congue. Pellentesque sollicitudin lacus at nisl ullamcorper, nec commodo augue imperdiet."
          />
        </Grid>
      </Box>
    </Center>
  );
};

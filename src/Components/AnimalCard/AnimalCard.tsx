import { Box, Text, Image, Badge, theme } from "@chakra-ui/react";
import _ from "lodash";
import { BsFillImageFill } from "react-icons/bs";
import { Animal } from "./types";

export interface AnimalCardProps {
  animal: Animal;
  onOpenModal(animal: Animal): void;
}

export const AnimalCard = ({ animal, onOpenModal }: AnimalCardProps) => {
  const { name, age, bodyText, gender, imageUrls, size } = animal;
  return (
    <Box
      maxW="250"
      minW="280"
      mb={10}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius={10}
      maxH={400}
      cursor="pointer"
      onClick={() => {
        onOpenModal(animal);
      }}
    >
      {!_.isEmpty(imageUrls) ? (
        <Image
          src={imageUrls![0] || ""}
          style={{
            objectFit: "cover",
            height: 200,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
      ) : (
        <Box
          height={200}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderBottomWidth={1}
        >
          <BsFillImageFill size={50} color={theme.colors.gray[700]} />
        </Box>
      )}
      <Box p={5}>
        <Box display="flex" flexDirection="row">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {gender}
          </Badge>
          <Text
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {size} &bull; {age}
          </Text>
        </Box>
        <Text fontSize="larger" fontWeight="bold" mt={2}>
          {name}
        </Text>
        <Text noOfLines={4}>{bodyText}</Text>
      </Box>
    </Box>
  );
};

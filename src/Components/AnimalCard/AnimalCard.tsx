import { Box, Text, Image, Badge } from "@chakra-ui/react";

export interface AnimalCardProps {
  name: string;
  bodyText: string;
  imageUrl: string;
  age: string;
  gender: string;
  size: string;
  personality: string;
}

export const AnimalCard = ({
  name,
  bodyText,
  imageUrl,
  gender,
  size,
  age,
}: AnimalCardProps) => {
  return (
    <Box
      maxW="250"
      minW="280"
      mb={10}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius={10}
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          style={{
            objectFit: "cover",
            height: 200,
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
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
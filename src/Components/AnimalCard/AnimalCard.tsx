import { Box, Text, Image, Badge, theme } from "@chakra-ui/react";
import { BsFillImageFill } from "react-icons/bs";

export interface AnimalCardProps {
  name: string;
  bodyText: string;
  imageUrl?: string;
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
      {imageUrl ? (
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

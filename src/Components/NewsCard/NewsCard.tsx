import { Box, Text, Image, theme } from "@chakra-ui/react";
import _ from "lodash";
import { BsFillImageFill } from "react-icons/bs";
import { News } from "./types";

export interface NewsCardProps {
  title: string;
  body: string;
  imageUrls?: string[];
  onOpenModal(n: News): void;
}

export const NewsCard = ({
  title,
  body,
  imageUrls,
  onOpenModal,
}: NewsCardProps) => {
  return (
    <Box
      maxW="300"
      minW="300"
      my={10}
      mx={5}
      borderColor="gray.300"
      borderWidth="thin"
      borderRadius={10}
      onClick={() =>
        onOpenModal({ title: title, body: body, imageUrls: imageUrls || [] })
      }
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
        <Text fontSize="larger" fontWeight="bold">
          {title}
        </Text>
        <Text noOfLines={4}>{body}</Text>
      </Box>
    </Box>
  );
};

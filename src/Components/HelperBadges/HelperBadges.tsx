import { Box, Text, theme } from "@chakra-ui/react";
import { FaDog, FaPhoneAlt, FaPen } from "react-icons/fa";

export const HelperBadges = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      mb={20}
    >
      <Box
        borderRadius={10}
        backgroundColor="red.300"
        p={{ base: "2", md: "10" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaDog
          size={28}
          color={theme.colors.white}
          style={{ marginBottom: 5 }}
        />
        <Text
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "larger" }}
          color="white"
          align="center"
        >
          Izaberite ljubimca
        </Text>
      </Box>
      <Box
        height={{ base: "8vw", md: "2" }}
        width={{ base: "2", md: "8vw" }}
        background={{
          base: `linear-gradient(to bottom, ${theme.colors.red[300]}, ${theme.colors.blue[300]})`,
          md: `linear-gradient(to right, ${theme.colors.red[300]}, ${theme.colors.blue[300]})`,
        }}
      />

      <Box
        borderRadius={10}
        backgroundColor="blue.300"
        p={{ base: "2", md: "10" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaPhoneAlt
          size={28}
          color={theme.colors.white}
          style={{ marginBottom: 5 }}
        />
        <Text
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "larger" }}
          color="white"
          align="center"
        >
          Kontaktirajte nas
        </Text>
      </Box>
      <Box
        height={{ base: "8vw", md: "2" }}
        width={{ base: "2", md: "8vw" }}
        background={{
          base: `linear-gradient(to bottom, ${theme.colors.blue[300]}, ${theme.colors.orange[300]})`,
          md: `linear-gradient(to right, ${theme.colors.blue[300]}, ${theme.colors.orange[300]})`,
        }}
      />

      <Box
        borderRadius={10}
        backgroundColor="orange.300"
        p={{ base: "2", md: "10" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaPen
          size={28}
          color={theme.colors.white}
          style={{ marginBottom: 5 }}
        />
        <Text
          fontWeight="semibold"
          fontSize={{ base: "sm", md: "larger" }}
          color="white"
          align="center"
        >
          Ispunite papire
        </Text>
      </Box>
      {/* <Box
        height={2}
        width={"8vw"}
        background={`linear-gradient(to right, ${theme.colors.orange[300]}, ${theme.colors.green[300]})`}
      />

      <Box
        borderRadius={10}
        backgroundColor="green.300"
        p={{base: "2", md: "10"}}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FaHome
          size={28}
          color={theme.colors.white}
          style={{ marginBottom: 5 }}
        />
        <Text
          align="center"
          fontWeight="semibold"
          fontSize={{base: "sm", md: "larger"
          color=}}"white"
        >
          Novi član obitelji
        </Text>
      </Box> */}
    </Box>
  );
};

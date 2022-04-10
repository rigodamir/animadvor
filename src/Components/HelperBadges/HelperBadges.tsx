import { Box, Text, theme } from "@chakra-ui/react";
import { FaDog, FaPhoneAlt, FaPen } from "react-icons/fa";

export const HelperBadges = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      mb={20}
    >
      <Box
        borderRadius={10}
        backgroundColor="red.300"
        p="10"
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
        <Text fontWeight="semibold" fontSize="larger" color="white">
          Izaberite ljubimca
        </Text>
      </Box>
      <Box
        height={2}
        width="8vw"
        background={`linear-gradient(to right, ${theme.colors.red[300]}, ${theme.colors.blue[300]})`}
      />

      <Box
        borderRadius={10}
        backgroundColor="blue.300"
        p="10"
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
        <Text fontWeight="semibold" fontSize="larger" color="white">
          Kontaktirajte nas
        </Text>
      </Box>
      <Box
        height={2}
        width="8vw"
        background={`linear-gradient(to right, ${theme.colors.blue[300]}, ${theme.colors.orange[300]})`}
      />

      <Box
        borderRadius={10}
        backgroundColor="orange.300"
        p="10"
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
          fontSize="larger"
          color="white"
          align="center"
        >
          Ispunite papire
        </Text>
      </Box>
      {/* <Box
        height={2}
        width="8vw"
        background={`linear-gradient(to right, ${theme.colors.orange[300]}, ${theme.colors.green[300]})`}
      />

      <Box
        borderRadius={10}
        backgroundColor="green.300"
        p="10"
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
          fontSize="larger"
          color="white"
        >
          Novi član obitelji
        </Text>
      </Box> */}
    </Box>
  );
};

import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputController } from "../../Components/Form/InputController";
import { loginAuth } from "../../Services/Auth/authApi";
import { useNavigate } from "react-router-dom";
import api from "../../Services/api";

export const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      try {
        const user = await loginAuth(data);

        setError("");

        localStorage.setItem(
          "@user",
          JSON.stringify({ refreshToken: user.refreshToken, user: user.user })
        );
        api.defaults.headers.common.Authorization = `Bearer ${user.token}`;

        navigation("/admin/novosti");
      } catch {
        return setError("Krivi unos!");
      }
    })();
  };

  return (
    <Center>
      <Box margin="5" padding={10} borderRadius={10}>
        <Text
          textAlign="center"
          fontSize="3xl"
          fontWeight="semibold"
          mb={5}
          color="gray.700"
        >
          Prijava
        </Text>
        <InputController
          control={control}
          name="name"
          placeholder="Korisničko ime"
        />
        <InputController
          control={control}
          name="password"
          placeholder="Zaporka"
          type="password"
        />
        <Box display="flex" justifyContent="center">
          <Button marginTop={5} colorScheme="blue" onClick={onHandleSubmit}>
            Prijava
          </Button>
        </Box>
        <Text color="red.300" mt={3} textAlign="center">
          {error}
        </Text>
      </Box>
    </Center>
  );
};

import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { InputController } from "../../Components/Form/InputController";
import { loginAuth } from "../../Services/Auth/authApi";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  const { control, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const onHandleSubmit = () => {
    handleSubmit(async (data) => {
      const user = await loginAuth(data);

      if (!user) return setError("Krivi unos!");
      setError("");
      localStorage.setItem("@user", JSON.stringify(user));
      navigation("/admin");
    })();
  };

  return (
    <Center>
      <Box margin="5" backgroundColor="blue.100" padding={10} borderRadius={10}>
        <InputController
          control={control}
          name="name"
          placeholder="Korisničko ime"
        />
        <InputController
          control={control}
          name="name"
          placeholder="Zaporka"
          type="password"
        />
        <Button marginTop={10} onClick={onHandleSubmit}>
          Prijava
        </Button>
        <Text color="red.300">{error}</Text>
      </Box>
    </Center>
  );
};

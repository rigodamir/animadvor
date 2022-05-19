import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./Screens/AboutUs/AboutUs";
import { Admin } from "./Screens/Admin/Admin";
import { LoginScreen } from "./Screens/Admin/LoginScreen";
import { AnimalsScreen } from "./Screens/Animals/AnimalsScreen";
import { ContactScreen } from "./Screens/Contact/ ContactScreen";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";
import { NewsScreen } from "./Screens/News/NewsScreen";

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/onama" element={<AboutUs />} />
        <Route path="/novosti" element={<NewsScreen />} />
        <Route path="/kontakt" element={<ContactScreen />} />
        <Route path="/zivotinje" element={<AnimalsScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;

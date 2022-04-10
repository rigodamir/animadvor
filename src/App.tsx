import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
/* import { Footer } from "./Components/Footer/Footer"; */
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { AboutUs } from "./Screens/AboutUs/AboutUs";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";

const App = () => {
  return (
    <ChakraProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/onama" element={<AboutUs />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;

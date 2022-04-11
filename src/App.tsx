import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
/* import { Footer } from "./Components/Footer/Footer"; */
import { NavigationBar } from "./Components/NavigationBar/NavigationBar";
import { AboutUs } from "./Screens/AboutUs/AboutUs";
import { ContactScreen } from "./Screens/Contact/ ContactScreen";
import { HomeScreen } from "./Screens/HomeScreen/HomeScreen";
import { NewsScreen } from "./Screens/News/NewsScreen";

const App = () => {
  return (
    <ChakraProvider>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/onama" element={<AboutUs />} />
        <Route path="/novosti" element={<NewsScreen />} />
        <Route path="/kontakt" element={<ContactScreen />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import { AdminNovostiScreen } from "./AdminNovostiScreen";
import { AdminZivotinjeScreen } from "./AdminZivotinjeScreen";

export const Admin = () => {
  return (
    <Routes>
      <Route path="/novosti" element={<AdminNovostiScreen />} />
      <Route path="/zivotinje" element={<AdminZivotinjeScreen />} />
    </Routes>
  );
};

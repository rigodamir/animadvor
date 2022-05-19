import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

export const Admin = () => {
  return (
    <NavBar>
      <Routes>
        <Route path="admin/novosti" element={<></>} />
        <Route path="admin/zivotinje" element={<></>} />
      </Routes>
    </NavBar>
  );
};

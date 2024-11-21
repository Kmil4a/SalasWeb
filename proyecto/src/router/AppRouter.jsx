import { Routes, Route, Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import SalasPage from "../pages/SalasPage";
import ReservasPage from "../pages/ReservasPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/salas" element={<SalasPage />} />
      <Route path="*" element={<Navigate to="/"/>} />
      <Route path="/reservas" element={<ReservasPage />} />
    </Routes>
  );
};

export default AppRouter;

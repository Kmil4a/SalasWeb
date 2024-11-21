import { useState, useEffect } from "react";
import TableReservas from "../components/TableReservas";

const ReservasPage = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/reservas");
      const data = await response.json();
      setReservas(data);
    } catch (error) {
      console.error("Error al obtener las reservas:", error);
    }
  };

  return (
    <div className="reservas-container">
      <h1 id="titulo">Mis Reservas</h1>
      <TableReservas reservas={reservas} />
    </div>
  );
};

export default ReservasPage;
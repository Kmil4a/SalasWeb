import React from "react";
import { Button, Table } from "reactstrap";

const TableReservas = ({ reservas }) => {
  return (
    <div>
      <h2>Salas Reservadas</h2>
      <Table bordered>
        <thead>
          <tr>
            <th>Salas</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Confirmado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.room}</td>
              <td>{reserva.time}</td>
              <td>
                {new Date(reserva.date).toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </td>
              <td>{reserva.confirmed ? "Sí" : "No"}</td>
              <td>
                <Button color="success" className="btn-accion">
                  Check-in
                </Button>{" "}
                <Button color="warning" className="btn-accion">
                  Editar
                </Button>{" "}
                <Button color="danger" className="btn-accion">
                  Cancelar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableReservas;

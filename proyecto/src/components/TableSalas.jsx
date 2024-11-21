// import { Table } from "reactstrap";
// import ItemTable from "./ItemTable";
// import "../styles/TableSalas.css";

// const TableSalas = ({ salas = [], handleEdit, getData }) => {
//   return (
//     <div id="tabla">
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Salas</th>
//             <th>Capacidad</th>
//             <th>Disponibilidad</th>
//             <th>Evento</th>
//           </tr>
//         </thead>
//         <tbody>
//           {salas.map((sala) => (
//             <ItemTable
//               handleEdit={handleEdit}
//               key={sala.id}
//               sala={sala}
//               getData={getData}
//             />
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default TableSalas;

import React from "react";
import { Button, Table } from "reactstrap";

const TableSalas = ({ salas = [], handleSelectSala }) => {
  return (
    <div id="tabla">
      <Table striped>
        <thead>
          <tr>
            <th>Salas</th>
            <th>Capacidad</th>
            <th>Disponibilidad</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((sala) => (
            <tr key={sala.id}>
              <td>{sala.name}</td>
              <td>{sala.capacity}</td>
              <td>{sala.is_active ? "Disponible" : "No Disponible"}</td>
              <td>
                <Button color="primary" onClick={() => handleSelectSala(sala)}>
                  Reservar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableSalas;

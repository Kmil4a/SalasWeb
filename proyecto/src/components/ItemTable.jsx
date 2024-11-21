import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
} from "reactstrap";
import { useState } from "react";
import "../styles/TableSalas.css";

const ItemTable = ({ sala, handleEdit, getData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const onDelete = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/room/${sala.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      getData();
      toggle();
    } else {
      console.log("Error al eliminar la sala");
    }
  };

  return (
    <tr key={sala.id}>
      <th scope="row">{sala.name}</th>
      <td>{sala.capacity}</td>
      <td>{sala.available ? "Disponible" : "No disponible"}</td>
      <td>
        Esta sala tiene {sala.reservations} reservas para hoy{" "}
        <Button color="danger" id="boton-reservar">
          Reservar
        </Button>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle data-toggle="dropdown" tag="span" id="puntos">
            ...
          </DropdownToggle>
          <DropdownMenu id="menuPuntos">
            <DropdownItem onClick={() => handleEdit(sala)}>Editar</DropdownItem>
            <DropdownItem onClick={onDelete}>Eliminar</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </td>
    </tr>
  );
};

export default ItemTable;

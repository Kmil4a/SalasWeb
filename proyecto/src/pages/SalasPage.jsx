import { useState, useEffect } from "react";
import TableSalas from "../components/TableSalas";
import { Button } from "reactstrap";
import ModalSala from "../components/ModalSala";
import "../styles/SalasPage.scss";
import ModalReserva from "../components/ModalReserva";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const SalasPage = () => {
  const [salas, setSalas] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalReserva, setModalReserva] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [salaSelected, setSalaSelected] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSalas();
  }, []);

  const toggle = () => setModal(!modal);
  const toggleReserva = () => setModalReserva(!modalReserva);

  const fetchSalas = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/room");
    const data = await response.json();
    setSalas(data);
    setIsLoading(false);
  };

  const handleEdit = (sala) => {
    setSalaSelected(sala);
    setIsEdit(true);
    toggle();
  };

  const handleCreate = () => {
    setIsEdit(false);
    toggle();
    setSalaSelected({});
  };

  const handleReserva = (sala) => {
    setSalaSelected(sala);
    toggleReserva();
  };

  return (
    <div className="page_container">
      <h1 id="titulo">Reserva de Salas</h1>
      <Navbar />
      <div>
        <Button
          id="boton-crearSala"
          color="danger"
          onClick={handleCreate}
          className="button_crear_sala"
        >
          Crear nueva sala
        </Button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <TableSalas
          salas={salas}
          handleEdit={handleEdit}
          handleReserva={handleReserva}
          fetchSalas={fetchSalas}
          getData={fetchSalas}
        />
      )}
      {modal && (
        <ModalSala
          isEdit={isEdit}
          modal={modal}
          toggle={toggle}
          getData={fetchSalas}
          sala={salaSelected}
        />
      )}
      {modalReserva && (
        <ModalReserva
          modal={modalReserva}
          toggle={toggleReserva}
          sala={salaSelected}
          fetchSalas={fetchSalas}
          salas={salas}
        />
      )}
    </div>
  );
};

export default SalasPage;

// import { useState, useEffect } from "react";
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Form,
//   FormGroup,
//   Label,
//   Input,
// } from "reactstrap";
// import TableSalas from "../components/TableSalas";
// import "../styles/SalasPage.css";

// const SalasPage = () => {
//   const [salas, setSalas] = useState([]);
//   const [modal, setModal] = useState(false);
//   const [selectedSala, setSelectedSala] = useState(null);
//   const [hora, setHora] = useState("");
//   const [fecha, setFecha] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchSalas();
//   }, []);

//   const fetchSalas = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/room");
//       const data = await response.json();
//       setSalas(data);
//     } catch (error) {
//       console.error("Error al obtener las salas:", error);
//     }
//   };

//   const toggleModal = () => setModal(!modal);

//   const handleSelectSala = (sala) => {
//     setSelectedSala(sala);
//     toggleModal();
//   };

//   const handleReserva = async (event) => {
//     event.preventDefault();

//     if (!hora || !fecha || !selectedSala) {
//       setMessage("Por favor, complete todos los campos.");
//       return;
//     }

//     const reservaData = {
//       room: selectedSala.id,
//       time: hora,
//       date: fecha,
//       confirmed: false, // Inicia como no confirmada
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/reservas", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(reservaData),
//       });

//       if (response.ok) {
//         setMessage("Reserva realizada con éxito.");
//         setHora("");
//         setFecha("");
//         setSelectedSala(null);
//         toggleModal();
//         fetchSalas(); // Actualiza las salas si es necesario
//       } else {
//         setMessage("Error al realizar la reserva.");
//       }
//     } catch (error) {
//       console.error("Error al hacer la reserva:", error);
//       setMessage("Error al hacer la reserva.");
//     }
//   };

//   return (
//     <div className="salas-container">
//       <h1 id="titulo">Reserva de Salas</h1>
//       <div>
//         <TableSalas salas={salas} handleSelectSala={handleSelectSala} />
//       </div>

//       <Modal isOpen={modal} toggle={toggleModal}>
//         <ModalHeader toggle={toggleModal}>Reservar Sala</ModalHeader>
//         <ModalBody>
//           {message && <p>{message}</p>}
//           <Form onSubmit={handleReserva}>
//             <FormGroup>
//               <Label for="hora">Hora</Label>
//               <Input
//                 type="text"
//                 name="hora"
//                 id="hora"
//                 placeholder="Ej. 10:00 - 10:30"
//                 value={hora}
//                 onChange={(e) => setHora(e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="fecha">Fecha</Label>
//               <Input
//                 type="date"
//                 name="fecha"
//                 id="fecha"
//                 value={fecha}
//                 onChange={(e) => setFecha(e.target.value)}
//               />
//             </FormGroup>
//             <Button type="submit" color="primary">
//               Reservar
//             </Button>
//           </Form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="secondary" onClick={toggleModal}>
//             Cancelar
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default SalasPage;

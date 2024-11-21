import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from "reactstrap";

const ModalReserva = ({ isEdit, modal, toggle, reserva, fetchReservas }) => {
  const [formData, setFormData] = useState(
    reserva || { room: "", date: "", time: "", confirmed: false }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit
      ? `http://127.0.0.1:8000/api/reservas/${reserva.id}`
      : "http://127.0.0.1:8000/api/reservas";
    const method = isEdit ? "PUT" : "POST";

    try {
      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      fetchReservas();
      toggle();
    } catch (error) {
      console.error("Error al guardar la reserva:", error);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {isEdit ? "Editar Reserva" : "Crear Reserva"}
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="room">Sala</Label>
            <Input
              type="number"
              name="room"
              id="room"
              value={formData.room}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Fecha</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="time">Hora</Label>
            <Input
              type="time"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="confirmed"
                checked={formData.confirmed}
                onChange={handleChange}
              />
              Confirmado
            </Label>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Guardar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalReserva;

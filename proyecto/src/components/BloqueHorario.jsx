import React from "react";

const BloqueHorario = ({
  index,
  start,
  end,
  checked,
  available,
  setBloquesHorarios,
  bloquesHorarios,
}) => {
  const handleCheck = () => {
    if (!available) return;
    const newBloquesHorarios = bloquesHorarios.map((bloque, i) => {
      if (i === index) {
        bloque.checked = !checked;
      } else {
        bloque.checked = false;
      }
      return bloque;
    });
    setBloquesHorarios(newBloquesHorarios);
  };

  return (
    <p
      className={`bloque_horario ${checked ? "bloque_horario_checked" : ""} ${
        available ? "" : "bloque_horario_unavailable"
      }`}
      onClick={handleCheck}
    >
      {start} - {end}
    </p>
  );
};

export default BloqueHorario;

import { useState } from "react";
import "./carta_persona.css";

function PersonCard({ person: persona }) {
  const [mostar_detalles, actualizar_detalles] = useState(false);

  const alternar_detalles = () => {
    actualizar_detalles(!mostar_detalles);
  };

  return (
    <div className="person-card">
      <img src={persona.image} alt={persona.name} className="person-image" />
      <h2>{persona.name}</h2>
      <button className="boton-detalles" onClick={alternar_detalles}>
        {mostar_detalles ? "Ocultar descubrimiento" : "Ver descubrimiento"}
      </button>
      {mostar_detalles && (
        <div className="detalles">
          <p>
            <strong>Descubrimiento:</strong> {persona.Descubrimiento}
          </p>
          <p>
            <strong>Bibliografía:</strong> {persona.bibliografia}
          </p>
        </div>
      )}
    </div>
  );
}

export default PersonCard;

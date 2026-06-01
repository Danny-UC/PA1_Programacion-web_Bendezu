import "./App.css";
import cientificos from "./data/cientificos";
import PersonCard from "./componentes/carta_persona";

function App() {
  return (
    <div className="app-contenedor">
      <header className="app-header">
        <h1>Pioneros de la Electricidad</h1>
        <p>Personas que iluminaron el mundo con sus descubrimientos</p>
      </header>
      <div className="cartas-contenedor">
        {cientificos.map((persona) => (
          <PersonCard key={persona.id} person={persona} />
        ))}
      </div>
    </div>
  );
}

export default App;

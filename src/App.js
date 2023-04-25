import './App.css';
import FreeCodeCamp_logo from "../src/imagenes/FreeCodeCamp_logo.svg.png"
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className="freecodecamp-logo-contenedor">
        <img 
        src={FreeCodeCamp_logo}
        className="freecodecamp-logo"
        alt="logo-calculadora"
        />
      </div>
      <div className="contenedor-calculadora">
      <div className="fila">
        <Boton>1</Boton>
        <Boton>+</Boton>

      </div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>


      </div>
    </div>
  );
};

export default App;

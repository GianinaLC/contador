import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [contador, setContador] = useState(0)

  const contadorClick = () => {
    setContador(contador + 1)
  };
  const reiniciarContador = () => {
    setContador(0)
  };

  return (
    <div className='App'>
      <div className='container'>
        <Contador numClicks={contador}></Contador>
        <Boton texto='Click' esBotonClick={true} manejarClick={contadorClick} ></Boton>
        <Boton texto='Reiniciar' esBotonClick={false} manejarClick={reiniciarContador}></Boton>
      </div>
    </div>
  );
}

export default App;

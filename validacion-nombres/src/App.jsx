import { useState, useEffect } from 'react';
import './App.css';
import './index.css'

function App() {
  const [nombre, setNombre] = useState('');
  const [esValido, setEsValido] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const validarNombre = async () => {
    try {
      const res = await fetch(`http://localhost:3000/validar/${nombre}`);
      const data = await res.json();

      if (data.valido) {
        setEsValido(true);
      } else {
        setEsValido(false);
        setMensaje('Nombre inválido.');
      }
    } catch (err) {
      console.error('Error en la validación', err);
    }
  };

  useEffect(() => {
    if (esValido) {
      fetch(`http://localhost:3000/bienvenida/${nombre}`)
        .then(res => res.json())
        .then(data => setMensaje(data.mensaje))
        .catch(err => console.error('Error al obtener bienvenida', err));
    }
  }, [esValido]);

  return (
    <div className="App">
      <h1>Validar Usuario</h1>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={validarNombre}>Validar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default App;

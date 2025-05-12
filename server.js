const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


const usuariosValidos = ['maxi', 'tati', 'mauri', 'anto', 'lucas', 'sofia', 'juan'];

app.use(cors());


app.get('/validar/:nombre', (req, res) => {
  const nombre = req.params.nombre.toLowerCase();
  const esValido = usuariosValidos.includes(nombre);
  res.json({ valido: esValido });
});


app.get('/bienvenida/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}` });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

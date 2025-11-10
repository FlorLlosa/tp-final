const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta de prueba
app.get('/api', (req, res) => {
  res.json({ mensaje: '¡Tp final corriendo con éxito en Docker!' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
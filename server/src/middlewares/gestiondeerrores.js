const express = require('express');  // Importa el módulo 'express'.
const app = express();  // Crea una instancia de la aplicación Express.
const bodyParser = require('body-parser');  // Importa el módulo 'body-parser'.

app.use(bodyParser.json());  // Configura la aplicación para usar 'body-parser' con formato JSON.

app.post('/', (req, res) => {  // Maneja solicitudes POST a la ruta raíz ('/').
    console.log(req.body);  // Imprime el cuerpo de la solicitud en la consola del servidor.
    res.send('Data received');  // Envía una respuesta al cliente con el texto 'Data received'.
});

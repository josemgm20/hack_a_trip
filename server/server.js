require('dotenv').config();

//Conexiones con express y morgan
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./src/routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json()); //raw
//Rutas
app.use(routes);
// app.use('/',(req,res) => {
//     res.send({
//         status: 'ok',
//         message: 'Esto es el main'
//     });
// });



//Middleware de 404
app.use((req, res) => {
    res.status(404).send({
        status: 'error,',
        message: '404 not found'
    });
});

//Midelware para evitar problemas con cors
app.use(cors());


//Middleware donde se encuentran las rutas
app.use(routes);

//Middleware de gestion de errores
app.use((error, req, res, next) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});

//Lanzamos el servidor

app.listen(process.env.PORT, () =>{
    console.log(`Servidor funcionando: http://localhost:${process.env.PORT}`)
});
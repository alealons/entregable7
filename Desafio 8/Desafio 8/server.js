const express = require('express');
const productos = require('./api/productos');
//const instacncia = new productos();
// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// completar el codigo...
app.get('/api/productos/listar', (req, res) => {
    return res.send(productos.listar());
});

app.get('/api/productos/listar/:id', (req, res) => {
    const posicionArray = req.params.id -1 ;
    return res.json(productos.listarPorId(posicionArray));
});

app.post('/api/productos/guardar', (req, res) => {
    return res.json(productos.guardar(req.body))
});

app.get('/api/mensajes/:id', (req, res) => {
    return res.send('mensaje con ID: ' + req.params.id);
});
// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});

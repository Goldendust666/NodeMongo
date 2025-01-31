const express = require("express");
const path = require('path');
const app = express();
const port = 3069;
app.use(express.static('public'));
// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());
const moduloCoche = require('./models/coche');

// Obtener todos los ítems
app.get("/items", (req, res) => {
    moduloCoche.buscaTodos()
        .then(coches => res.json(coches))
        .catch(err => res.status(500).json({"error": err}))
});

// Obtener un ítem por ID
app.get("/items/:id", (req, res) => {
    const itemId = req.params.id;
    moduloCoche.buscaPorId(itemId)
        .then(coche => res.json(coche))
        .catch(err => res.status(500).json({"error": err}))
});

// Crear un nuevo ítem
app.post("/items", (req, res) => {
    const nuevoCoche = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        color: req.body.color
    };
    moduloCoche.creaCocheNuevo(nuevoCoche)
        .then(coche => res.status(201).json(coche))
        .catch(err => res.status(500).json({"error": err}))
});

// Actualizar un ítem existente
app.put("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const datosActualizados = {
        marca: req.body.marca,
        modelo: req.body.modelo,
        año: req.body.año,
        color: req.body.color
    };
    moduloCoche.actualizaCoche(itemId, datosActualizados)
        .then(coche => res.json(coche))
        .catch(err => res.status(500).json({"error": err}))
});

// Eliminar un ítem
app.delete("/items/:id", (req, res) => {
    const itemId = req.params.id;
    moduloCoche.borraCoche(itemId)
        .then(coche => res.json(coche))
        .catch(err => res.status(500).json({"error": err}))
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/tabla.html'))
})

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://104.154.249.241:${port}`);
});
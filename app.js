require('dotenv').config();
const mongoose = require('mongoose');
// Using ES6 imports
mongoose.connect(process.env.CADENA)
.then(() => console.log('Connected!'));

const cocheSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    color: String
});

//const Coche = mongoose.model('Coche', cocheSchema, 'coches');
//const modeloCoche = require('./models/coche');

/*
const buscaPrimero = () => {
    Coche.findOne()
    .then(coche => {
        if (coche) {
            console.log('Primer coche encontrado', coche)
        } else {
            console.log('No se ha encontrado ningún registro')
        }
    })
    .catch(err => console.error("Error al obtener el coche", err))
}
buscaPrimero();

const buscaTodos = () => {
    Coche.find()
    .then(coches => {
        if (coches.length > 0) {
            console.log('Coches encontrados', coches)
        } else {
            console.log('No se ha encontrado ningún registro', err)
        }
    })
    .catch(err => console.error("Error al obtener los coches"))
}

const idBuscado = '6798f6994b062550114a2e0c';
const buscaPorId = (id) => {
    Coche.findById(id)
    .then(coche => {
        if (coche) {
            console.log('Primer coche encontrado', coche)
        } else {
            console.log('No se ha encontrado ningún registro con el id' + id)
        }
    })
    .catch(err => console.error("Error al obtener el coche", err))
}

const buscarPrecioMayor = () => {
    Coche.find({ precio: { $gt: 300 } })
    .then(coches => {
        if (coches.length > 0) {
            console.log('Coches que cuestan más de 300', coches)
        } else {
            console.log('No se ha encontrado ningún registro costando más de 300' + id)
        }
    })
    .catch(err => console.error("Error al obtener los coches", err))
}
buscarPrecioMayor();
*/

const modeloCoche = require('./models/coche');
const idBuscado = '6798f6fe4b062550114a2e0e';
modeloCoche.creaCocheNuevo("Toyota", "Corolla", 2023, "Azul");
modeloCoche.buscaTodos();
modeloCoche.actualizaCoche(idBuscado, 3000);
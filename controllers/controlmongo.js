// Using Node.js `require()`
const mongoose = require('mongoose');
// Using ES6 imports
mongoose.connect('mongodb+srv://ljac:1q2w3e4r@cluster0.zez5f.mongodb.net/cochera')
.then(() => console.log('¡Conectado!'));

const cocheSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    color: String
});

const Coche = mongoose.model('Coche', cocheSchema, 'coches');

const buscaPrimero = () => {
    return Coche.findOne()
        .then(coche => {
            if (coche) {
                console.log('Primer coche encontrado:', coche);
                return coche;
            } else {
                console.log('No se encontró ningún registro');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al obtener el coche:', err);
            throw err;
        });
}

module.exports = { buscaPrimero };
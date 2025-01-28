// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports

mongoose.connect('mongodb+srv://ljac:1q2w3e4r@cluster0.zez5f.mongodb.net/almacen')
  .then(() => console.log('Connected!'));
const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenadore',ordenadorSchema, 'ordenadores');

const buscaPrimero = ()=>{
  //buscamos el primer registro
Ordenador.findOne()
  .then( ordenador=>{
    if (ordenador) {
      console.log('Primer ordenador encontrado',ordenador)
    } else {
      console.log('No se encontró ningún registro')
    }
  })
  .catch(err=>console.error('Error al obtener el ordenador',err));
}
module.exports = { buscaPrimero };

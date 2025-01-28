// Using Node.js `require()`
const mongoose = require('mongoose');

// Using ES6 imports

mongoose.connect('mongodb+srv://ljac:1q2w3e4r@cluster0.zez5f.mongodb.net/almacen')
  .then(() => console.log('Connected!'));
  const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
  });
  //const Ordenador = mongoose.model('Ordenadore',ordenadorSchema,'ordenadores' );

//const modeloOrdenador = require('/models/ordenador');


  /*
  const buscaPrimero= ()=>{
    Ordenador.findOne()
    .then( ordenador =>{
      if (ordenador) {
        console.log('Primer ordenador encontrado', ordenador)

      }else{
        console.log('No se ha encontrado ningun registro')

      }
    })
    .catch(err=>console.error("Error al obtener el ordenador",err))
  }
buscaPrimero();
const buscaTodos= ()=>{
  Ordenador.find()
  .then( ordenadores =>{
    if (ordenadores.length>0) {
      console.log('Ordenadores encontrados', ordenadores)

    }else{
      console.log('No se ha encontrado ningun registro',err)

    }
  })
  .catch(err=>console.error("Error al obtener los ordenadores"))
}
  
const idBuscado = '6798f6994b062550114a2e0c';
const buscaPorId= (id)=>{
  Ordenador.findById(id)
  .then( ordenador =>{
    if (ordenador) {
      console.log('Primer ordenador encontrado', ordenador)

    }else{
      console.log('No se ha encontrado ningun registro con el id'+id)

    }
  })
  .catch(err=>console.error("Error al obtener el ordenador",err))
}

const buscarPrecioMayor=()=>{
  Ordenador.find({precio: {$gt:300}})
  .then( ordenadores =>{
    if (ordenadores.length>0) {
      console.log('Ordenadores que cuestan mas de 300', ordenadores)

    }else{
      console.log('No se ha encontrado ningun registro costando mas de 300'+id)

    }
  })
  .catch(err=>console.error("Error al obtener los ordenadores",err))
}
buscarPrecioMayor();
*/


const modeloOrdenador = require('./models/ordenador');






const idBuscado = '6798f6fe4b062550114a2e0e';



modeloOrdenador.creaNuevoOrdenador("IBM",2000);
modeloOrdenador.buscaTodos();
modeloOrdenador.actualizaPrecio(idBuscado,3000)


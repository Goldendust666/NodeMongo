const mongoose = require('mongoose');

// Conexión a la base de datos
mongoose.connect('mongodb+srv://ljac:1q2w3e4r@cluster0.zez5f.mongodb.net/cochera')
.then(() => console.log('¡Conectado a la base de datos!'));

// Definición del esquema para coches
const cocheSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    año: Number,
    color: String
});

// Creación del modelo
const Coche = mongoose.model('Coche', cocheSchema, 'coches');

// Función para buscar el primer coche
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

// Función para buscar todos los coches
const buscaTodos = () => {
    return Coche.find()
        .then(coches => {
            if (coches.length > 0) {
                console.log('Coches encontrados:', coches);
                return coches;
            } else {
                console.log('No se encontró ningún registro');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al obtener los coches:', err);
            throw err;
        });
}

// Función para buscar un coche por ID
const buscaPorId = (id) => {
    return Coche.findById(id)
        .then(coche => {
            if (coche) {
                console.log('Coche encontrado:', coche);
                return coche;
            } else {
                console.log('No se encontró ningún coche con el ID:', id);
                return null;
            }
        })
        .catch(err => {
            console.error('Error al obtener el coche:', err);
            throw err;
        });
}

// Función para crear un nuevo coche
const creaCocheNuevo = (marca, modelo, año, color) => {
    const nuevoCoche = new Coche({
        marca: marca,
        modelo: modelo,
        año: año,
        color: color
    });

    // Guardar el coche en la base de datos
    return nuevoCoche.save()
        .then(coche => console.log('Coche guardado:', coche))
        .catch(err => console.error('Error al guardar el coche:', err));
}

// Función para actualizar un coche existente
const actualizaCoche = (idCoche, datosActualizados) => {
    return Coche.findByIdAndUpdate(idCoche, datosActualizados, { new: true })
        .then(cocheActualizado => {
            if (cocheActualizado) {
                console.log('Coche actualizado:', cocheActualizado);
                return cocheActualizado;
            } else {
                console.log('No se encontró ningún coche con ese ID.');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al actualizar el coche:', err);
            throw err;
        });
}

// Función para eliminar un coche
const borraCoche = (idCocheParaBorrar) => {
    return Coche.findByIdAndDelete(idCocheParaBorrar)
        .then(cocheEliminado => {
            if (cocheEliminado) {
                console.log('Coche eliminado:', cocheEliminado);
                return cocheEliminado;
            } else {
                console.log('No se encontró ningún coche con ese ID.');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al eliminar el coche:', err);
            throw err;
        });
}

// Exportar todas las funciones y el modelo
module.exports = {
    buscaPrimero,
    buscaTodos,
    buscaPorId,
    creaCocheNuevo,
    actualizaCoche,
    borraCoche,
    Coche
};
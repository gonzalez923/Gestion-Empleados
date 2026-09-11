const mongoose = require('mongoose');

const urlMongo = 'mongodb://127.0.0.1:27017/gestion_empleados';

mongoose.connect(urlMongo)
    .then(() => {
        console.log('✅ Conexión a MongoDB exitosa');
    })
    .catch((error) => {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1);
    });

module.exports = { mongoose };

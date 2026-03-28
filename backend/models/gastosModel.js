const moonoose = require('mongoose');

const gastosSchema = moonoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'Por favor ingrese una descripción']
    },
    importe: {
        type: Number,
        required: [true, 'Por favor ingrese el importe']
    },
},{
    timestamps: true  
})

module.exports = moonoose.model('Gasto', gastosSchema)
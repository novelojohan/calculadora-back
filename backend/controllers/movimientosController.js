const asyncHandler = require('express-async-handler');
const  Gasto = require('../models/gastosModel');

const getMovimientos = asyncHandler(async (req, res) => {
    const movimientos = await Gasto.find({})
    res.status(200).json(movimientos)
})

const addMovimiento = asyncHandler(async (req, res) => {
    if(!req.body.descripcion){
        res.status(400)
        throw new Error('Por favor ingrese una descripción')
    }
    if(!req.body.importe){
        res.status(400)
        throw new Error('Por favor ingrese un importe')
    }

    const movimiento = await Gasto.create({
        descripcion: req.body.descripcion,
        importe: req.body.importe
    })

    if(movimiento){
        res.status(201).json(movimiento)
    } else {
        res.status(500)
        throw new Error('Datos inválidos')
    }

})

const deleteMovimiento = asyncHandler(async (req, res) => {

    const movimientos = await Gasto.findByIdAndDelete(req.params.id)

    if(!movimientos){
        res.status(404)
        throw new Error('Movimiento no encontrado')
    } else {
        await Gasto.deleteOne(movimientos)
        res.status(200).json({"Mensaje": "Movimiento eliminado"})
    }
})

module.exports = {
    getMovimientos,
    addMovimiento,
    deleteMovimiento
}   
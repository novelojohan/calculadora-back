const express = require('express');
const router = express.Router();
const { getMovimientos, addMovimiento, deleteMovimiento } = require('../controllers/movimientosController');

//obtener movimientos
router.get('/', getMovimientos)

//agregar movimientos
router.post('/', addMovimiento)

//eliminar movimientos
router.delete('/:id', deleteMovimiento)

module.exports = router;
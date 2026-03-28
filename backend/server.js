const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const cors = require('cors')

connectDB()

const app = express()

/*
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
*/

app.use(cors())

app.use(express.json())
app.use('/api/movimientos', require('./routes/movimientosRoutes'))

app.use(errorHandler)

app.listen(port, ()=> console.log(`Servidor iniciado en el puerto ${port}`))


const express = require('express')
const app = express()

const bookingRouter = require('./routes/bookingRouter.js')

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello, world')
})

app.use('/reservation', bookingRouter)

module.exports = app

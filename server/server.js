require('dotenv').config({ path: 'config.env' })

const express = require('express')
const app = express()

const PORT = process.env.SERVER_PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

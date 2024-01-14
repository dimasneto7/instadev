require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`)
})

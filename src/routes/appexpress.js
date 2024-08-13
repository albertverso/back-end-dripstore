const express = require('express')
const app = express()
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json()) // middleware para parsear o body da requisição
app.use(cors()) // middleware para permitir requisições de outros domínios

module.exports = app
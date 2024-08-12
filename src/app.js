require('dotenv').config();

const port = process.env.PORT || 10000;
const app = require('./routes/app-express')
const jwt = require('jsonwebtoken');

require('./routes/authRoutes')
require('./routes/usuariosRoutes')
require('./routes/categoriaRoutes')
require('./routes/produtoRoutes')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
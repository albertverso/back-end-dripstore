require('dotenv').config();

const port = process.env.PORT || 10000;
const app = require('./routes/app-express')
const jwt = require('jsonwebtoken');

require('./routes/authRoutes')
require('./routes/usersRoutes')
require('./routes/categoryRoutes')
require('./routes/productRoutes')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
<<<<<<< HEAD
const app = require('./routes/appexpress');

const port = process.env.PORTA || 1000
=======
require('dotenv').config();
const app = require('./routes/appexpress')
require("./config/config")

const port = process.env.PORTA || 10000
>>>>>>> b1094bbb9a18caa9c9f5bb68e81fa5eed5b90696

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
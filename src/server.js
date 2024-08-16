require('dotenv').config();
const app = require('./routes/appexpress')
require("./config/config")

const port = process.env.PORTA || 10000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
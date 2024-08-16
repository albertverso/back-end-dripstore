const app = require('./routes/appexpress');

const port = process.env.PORTA || 1000

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
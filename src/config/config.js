<<<<<<< HEAD
const {PORTA, HOST, USUARIO, SENHA, BANCO} = process.env
const pass = encodeURIComponent(SENHA)
console.log(`postgres://${USUARIO}:${pass}@${HOST}:${PORTA}/${BANCO}`);

module.exports = {
    url: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}
=======
// config/database.js


const { PORTA, HOST, USUARIO, SENHA, BANCO } = process.env
console.log(`postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`);

// if (!PORTA || !HOST || !USUARIO || !SENHA || !BANCO) {
//     throw new Error('As variáveis devem estar definidas.');
// }

const uri = `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`;

module.exports = {
    uri
};
>>>>>>> b1094bbb9a18caa9c9f5bb68e81fa5eed5b90696

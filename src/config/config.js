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

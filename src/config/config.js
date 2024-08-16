const {PORTA, HOST, USUARIO, SENHA, BANCO} = process.env
const pass = encodeURIComponent(SENHA)
console.log(`postgres://${USUARIO}:${pass}@${HOST}:${PORTA}/${BANCO}`);

module.exports = {
    url: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}
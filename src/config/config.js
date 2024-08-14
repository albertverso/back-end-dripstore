const {PORTA, HOST, USUARIO, SENHA, BANCO} = process.env

module.exports = {
    uri: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}
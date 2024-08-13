const {
    USUARIO,
    SENHA,
    HOST,
    PORTA,
    BANCO
} = process.env

module.exports = {
    uri: 'postgresql://'+USUARIO+':'+SENHA+'@'+HOST+':'+PORTA+'/'+BANCO
}
const { PORTA = 6543,
    HOST = 'aws-0-us-west-1.pooler.supabase.com',
    USUARIO = 'postgres.pyfqdcxapmkceocjyeou',
    SENHA = 'projeto-backend',
    BANCO = 'postgres', } = process.env
console.log(`postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`);

module.exports = {
    url: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}

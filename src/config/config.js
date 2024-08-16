const { PORTA = 6543,
    HOST = 'aws-0-sa-east-1.pooler.supabase.com',
    USUARIO = 'postgres.pyfqdcxapmkceocjyeou',
    SENHA = 'projeto-backend',
    BANCO = 'postgres', } = process.env
const pass = encodeURIComponent(SENHA)
console.log(`postgres://${USUARIO}:${pass}@${HOST}:${PORTA}/${BANCO}`);

module.exports = {
    url: `postgres://${USUARIO}:${SENHA}@${HOST}:${PORTA}/${BANCO}`
}

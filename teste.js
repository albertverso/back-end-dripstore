require('dotenv').config();
const {Sequelize } =  require("sequelize")

const sequelize = new Sequelize('postgresql://postgres.ehtducsjvbqibjyhjrkp:projeto-backend@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
    dialect : "postgresql",
})

async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Conexão com o banco de dados foi bem-sucedida.');
    } catch (error) {
      console.error('Não foi possível conectar ao banco de dados:', error);
    }
  }
  
  testConnection();
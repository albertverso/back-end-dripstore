const {Sequelize } =  require("sequelize")


const b = new Sequelize('postgres://postgres.ehtducsjvbqibjyhjrkp:projeto-backend@aws-0-sa-east-1.pooler.supabase.com:6543/postgres', {
    dialect : "postgres"
})

b.authenticate(()=>{
    console.log("deue bom");
    
}).catch(erro => console.log(erro)
)
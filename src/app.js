require('dotenv').config()

require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')

const app = require('./routes/appexpress')
const PORTA = 10000

app.listen(PORTA, ()=> { console.log('http://localhost:'+PORTA)})
PORTA = 6543
HOST = 'aws-0-sa-east-1.pooler.supabase.com'
USUARIO = 'postgres.pyfqdcxapmkceocjyeou'
SENHA= 'projeto-backend'
BANCO= 'postgres'

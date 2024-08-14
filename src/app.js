require('dotenv').config()

require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')


const app = require('./routes/appexpress')
const PORTA = process.env.PORTA || 10000



app.listen(PORTA, ()=> { console.log('http://localhost:'+PORTA)})
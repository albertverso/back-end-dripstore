require('dotenv').config()
require('./config/config')

require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')

const app = require('./routes/appexpress')

const PORTA = 10000

app.listen(PORTA, ()=> { console.log('http://localhost:'+PORTA)})


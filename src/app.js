require('dotenv').config()

require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')

const app = require('./routes/appexpress')

const PORTA = 4500

app.listen(PORTA, ()=> { console.log('http://localhost:'+PORTA)})
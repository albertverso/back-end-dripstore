const app = require('./app-express')
const {CreateProduct, SearchProductAll, SearchProductId, UpdateProduct, DeleteProduct} = require('../controllers/productController')

// Adicionar uma nova categoria
app.post('/v1/product', CreateProduct);
  
// Buscar todos os categorias
app.get('/v1/product/search', SearchProductAll);

// Buscar um categoria por ID
app.get('/v1/product/:id', SearchProductId);

// Atualizar uma categoria por ID
app.put('/v1/product/:id', UpdateProduct);

// Deletar uma categoria por ID
app.delete('/v1/product/:id', DeleteProduct);
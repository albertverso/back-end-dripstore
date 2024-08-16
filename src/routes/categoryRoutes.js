const app = require('./app-express')
const {CreateCategory, SearchCategoryAll, SearchCategoryId, UpdateCategory, DeleteCategory} = require('../controllers/categoryController')

// Adicionar uma nova categoria
app.post('/v1/category', CreateCategory);
  
// Buscar todos os categorias
app.get('/v1/category/search', SearchCategoryAll);

// Buscar um categoria por ID
app.get('/v1/category/:id', SearchCategoryId);

// Atualizar uma categoria por ID
app.put('/v1/category/:id', UpdateCategory);

// Deletar uma categoria por ID
app.delete('/v1/category/:id', DeleteCategory);
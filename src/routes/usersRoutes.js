const app = require('./app-express')
const {CreateUser, SearchUserAll, SearchUserId, UpdateUser, DeleteUser} = require('../controllers/userControllers')

// Adicionar um novo usuário
app.post('/v1/user', CreateUser);
  
// Buscar todos os usuários
app.get('/v1/user', SearchUserAll);

// Buscar um usuário por ID
app.get('/v1/user/:id', SearchUserId);

// Atualizar um usuário por ID
app.put('/v1/user/:id', UpdateUser);

// Deletar um usuário por ID
app.delete('/v1/user/:id', DeleteUser);
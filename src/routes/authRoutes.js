const app = require('../routes/app-express');
const { login } = require('../controllers/authController');
const {authenticateToken} = require('../middleware/authMiddleware')

// Endpoint de login
app.post('/v1/user/token', login);

app.get('/v1/user/meus-pedidos', authenticateToken , (req, res) => {
    res.json({ message: 'Acesso permitido', user: req.user })});


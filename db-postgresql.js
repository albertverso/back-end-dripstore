const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3015;

// Substitua com suas informações do Supabase
const sequelize = new Sequelize('postgres://<username>:<password>@<host>:<port>/<database>', {
    dialect: 'postgres',
    logging: true, // Você pode desativar isso se não precisar de logs SQL
});

// Middleware
app.use(cors());
app.use(express.json()); // Para lidar com JSON em requisições POST

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo');
});

// Rota para obter usuário por ID
app.get('/v1/user/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('request.url', req.url); // debug
        console.log('request.params.id', id);

        const result = await sequelize.query('SELECT * FROM users WHERE id = :id', {
            replacements: { id },
            type: QueryTypes.SELECT,
        });
        res.send(result);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Erro ao buscar usuário');
    }
});

// Rota para criar um usuário
app.post('/v1/user/:name', async (req, res) => {
    try {
        const { name } = req.params;
        console.log('request.url', req.url); // debug
        console.log('request.params.name', name);

        const email = name + '@example.com'; // Exemplo de e-mail, ajuste conforme necessário
        await sequelize.query('INSERT INTO users (name, email) VALUES (:name, :email)', {
            replacements: { name, email },
            type: QueryTypes.INSERT,
        });
        res.status(201).send('Usuário criado com sucesso');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Erro ao criar usuário');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const port = process.env.PORT || 3000;
const database = process.env.DATABASE
const userdb = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST

const sequelize = new Sequelize(database, userdb, password, {
    host: host,
    dialect: 'mysql',
    logging: false, // Desative o log de SQL se não precisar
    // dialectOptions: {
    //     supportBigNumbers: true,
    //     ssl: {
    //       rejectUnauthorized: false, // Trust the self-signed certificate

    //     }
    //   }
});

// Criando a tabela usuarios no mysql usando diretamente o node com sequelize
const Usuario = sequelize.define('Usuario', {
    // Definição dos atributos do modelo
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
     // Outras opções do modelo
    tableName: 'usuarios', // Nome da tabela no banco de dados
    timestamps: false, // Defina como `true` se você usar timestamps
  });

// Sincroniza o modelo com o banco de dados
sequelize.sync()
  .then(() => {
    console.log('Tabela "usuarios" foi criada com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao criar tabela:', error);
  });

//iniciar um servidor Express (ou qualquer outra lógica do seu app)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();  

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Adicionar um novo usuário
app.post('/users', async (req, res) => {
  try {

      const { firstname, surname, email, password } = req.body;
      const user = await Usuario.create({
        firstname,
        surname,
        email,
        password,
      });
      res.status(201).json(user);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});


// Buscar todos os usuários
app.get('/users', async (req, res) => {
  try {
      const users = await Usuario.findAll();
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Buscar um usuário por ID
app.get('/users/:id', async (req, res) => {
  try {
      const user = await Usuario.findByPk(req.params.id);
      if (user) {
          res.status(200).json(user);
      } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Atualizar um usuário por ID
app.put('/users/:id', async (req, res) => {
  try {
      const user = await Usuario.findByPk(req.params.id);
      if (user) {
          await user.update(req.body);
          res.status(200).json(user);
      } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

// Deletar um usuário por ID
app.delete('/users/:id', async (req, res) => {
  try {
      const user = await Usuario.findByPk(req.params.id);
      if (user) {
          await user.destroy();
          res.status(204).send();
      } else {
          res.status(404).json({ error: 'Usuário não encontrado' });
      }
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
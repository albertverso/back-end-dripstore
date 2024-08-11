const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config();

const password = process.env.PASSWORD
const port = process.env.PORT || 3000;

const sequelize = new Sequelize('postgresql://postgres.snltkwbgrcgzsttkqqgx:' +password+ '@aws-0-us-west-1.pooler.supabase.com:6543/postgres')

// Sincroniza o modelo com o banco de dados
sequelize.sync()

// Criando a tabela usuarios
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
    timestamps: true, // Defina como `true` se você usar timestamps
  });

  // Criando a tabela categorias
const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  tableName: 'categorias', // Nome da tabela no banco de dados
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});

// Criando a tabela produtos
const Produto = sequelize.define('Produto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  use_in_menu: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true // Permite que o campo seja nulo
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  price_with_discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  tableName: 'produtos', // Nome da tabela no banco de dados
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});


// Criando a tabela Produtos Images
const ProdutoImage = sequelize.define('ProdutoImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Produto, // Nome do modelo
      key: 'id'
    },
    onDelete: 'CASCADE' // Deleta imagens quando o produto é deletado
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  path: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'produtos_images', // Nome da tabela no banco de dados
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});


// Criando a tabela Produtos Options
const ProdutoOption = sequelize.define('ProdutoOption', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  produto_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Produto, // Nome do modelo
      key: 'id'
    },
    onDelete: 'CASCADE', // Deleta opções quando o produto é deletado
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  shape: {
    type: DataTypes.ENUM('square', 'circle'),
    defaultValue: 'square'
  },
  radius: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  type: {
    type: DataTypes.ENUM('text', 'color'),
    defaultValue: 'text'
  },
  value: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'produtos_options', // Nome da tabela no banco de dados
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});

// Estabelece a relação de chave estrangeira
Produto.hasMany(ProdutoOption, { foreignKey: 'produto_id' });
ProdutoOption.belongsTo(Produto, { foreignKey: 'produto_id' });

// Criando a tabela Produtos Categorias
const ProdutoCategoria = sequelize.define('ProdutoCategoria', {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Produto,
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Categoria,
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: false
  }
}, {
  tableName: 'produtos_categoria', // Nome da tabela no banco de dados
  timestamps: true, // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
  indexes: [
    {
      unique: true,
      fields: ['product_id', 'category_id']
    }
  ]
});

// Estabelece as relações
Produto.belongsToMany(Categoria, { through: ProdutoCategoria, foreignKey: 'product_id' });
Categoria.belongsToMany(Produto, { through: ProdutoCategoria, foreignKey: 'category_id' });

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
  Usuario.create(req.body).then((result) => res.status(201).send(result))
});


// Buscar todos os usuários
app.get('/users', async (req, res) => {
  Usuario.findAll().then((result) => res.send(result))
});

// Buscar um usuário por ID
app.get('/users/:id', async (req, res) => {
  Usuario.findOne({ where: { id: req.params.id } }).then((result) => res.send(result))
});

// Atualizar um usuário por ID
app.put('/users/:id', async (req, res) => {
  Usuario.update(req.body, { where: { id: req.params.id } }).then((result) => res.send(result))
});

// Deletar um usuário por ID
app.delete('/users/:id', async (req, res) => {
  User.destroy({ where: { id: req.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
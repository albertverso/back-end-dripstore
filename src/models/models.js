const { uri } = require('../config/config.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

const User = sequelize.define(
    'User',
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: true
    },
);


const Category = sequelize.define(
    'Category',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        use_in_menu: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        timestamps: true
    },
);

const Product = sequelize.define(
    'Product', 
    {
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

  const ProductCategory = sequelize.define('ProductCategory', {
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      },
      onDelete: 'CASCADE',
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
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
  Product.belongsToMany(Category, { through: ProductCategory, foreignKey: 'category_id' });
  Category.belongsToMany(Product, { through: ProductCategory, foreignKey: 'product_id' });
  

// Sincronizar o modelo com o banco de dados    
sequelize.sync({alter: true})
  .then(() => {
    console.log('Conectou')
  })
  .catch(error => {
    console.error('Conexão falhou', error)
  });


module.exports ={
    User,
    Category,
    Product,
    ProductCategory
}
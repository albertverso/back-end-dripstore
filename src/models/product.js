const { uri } = require('../config/database.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri, {logging: console.log});

// Criando a tabela produtos
const Product = sequelize.define('Product', {
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
    timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
  });
 
// Estabelece a relação de chave estrangeira

// Criando a tabela Produtos Options
const ProductOption = sequelize.define('ProductOption', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product, // Nome do modelo
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
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});

// Estabelece a relação de chave estrangeira
Product.hasMany(ProductOption, { foreignKey: 'product_id' });
ProductOption.belongsTo(Product, { foreignKey: 'product_id' });

// Criando a tabela Produtos Images
const ProductImage = sequelize.define('ProductImage', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Product, // Nome do modelo
      key: 'id'
    },
    onDelete: 'CASCADE' // Deleta imagens quando o produto é deletado
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  path: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  }
}, {
  timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
});

// Estabelece a relação de chave estrangeira
Product.hasMany(ProductImage, { foreignKey: 'product_id' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

// Sincronizar o modelo com o banco de dados    
sequelize.sync({alter: true}); // Usa alter para ajustar a tabela existente

module.exports ={
  Product, ProductImage, ProductOption
}
const { uri } = require('../config/database.js');
const {Product} = require('../models/product.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

// Criando a tabela categorias
const Category = sequelize.define('Category', {
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
    timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
  });


Product.belongsToMany(Category, { through: "ProductCategory", foreignKey: 'product_id' });
Category.belongsToMany(Product, { through: "ProductCategory", foreignKey: 'category_id' });

// Sincronizar o modelo com o banco de dados    
sequelize.sync(); // Usa alter para ajustar a tabela existente

module.exports ={
  Category
}
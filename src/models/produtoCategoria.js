const { uri } = require('../config/database.js');
const {Produto} = require('../models/produto.js');
const {Categoria} = require('../models/categoria.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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
  

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    ProdutoCategoria
}
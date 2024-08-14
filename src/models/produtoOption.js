const { uri } = require('../config/database.js');
const {Produto} = require('../models/produto.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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

// Sincronizar o modelo com o banco de dados    
sequelize.sync({ alter: true }); // Usa alter para ajustar a tabela existente

module.exports ={
    ProdutoOption
}
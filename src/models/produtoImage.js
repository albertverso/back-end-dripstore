const { uri } = require('../config/database.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    ProdutoImage
}
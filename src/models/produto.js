const { uri } = require('../config/database.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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
  

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    Produto
}
const { uri } = require('../config/database.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    Categoria
}
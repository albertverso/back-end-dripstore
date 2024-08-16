const { uri } = require('../config/database.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

// Criando a tabela usuarios
const User = sequelize.define('User', {
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
    timestamps: true, // Defina como `true` se você usar timestamps
  });

// Sincronizar o modelo com o banco de dados    
sequelize.sync(); // Usa alter para ajustar a tabela existente

module.exports ={
    User
}
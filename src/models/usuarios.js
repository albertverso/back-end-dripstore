const { uri } = require('../config/database.js');

const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(uri);

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

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    Usuario
}
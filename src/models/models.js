const { uri } = require('../config/config.js');

const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

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

// Sincronizar o modelo com o banco de dados    
sequelize.sync();

module.exports ={
    User,
    Category
}
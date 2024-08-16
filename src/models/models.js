
const { Sequelize, DataTypes } = require('sequelize');

const {url} = require('../config/config')


const sequelize = new Sequelize(url)

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

const Product = sequelize.define(
    'Product', 
    {
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
    },
    {
        tableName: 'produtos', // Nome da tabela no banco de dados
        timestamps: true // Define se a tabela deve ter colunas `createdAt` e `updatedAt`
    }
);

const ProductOption = sequelize.define('ProductOption', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos', // Nome da tabela de produtos
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
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
    values: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const ProductImage = sequelize.define('ProductImage', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos', // Nome da tabela de produtos
            key: 'id'
        }
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Estabelece as relações
Product.hasMany(ProductImage, { foreignKey: 'product_id' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(ProductOption, { foreignKey: "product_id" });
ProductOption.belongsTo(Product, { foreignKey: "product_id" });

Category.belongsToMany(Product, { through: 'ProdutoCategoria', foreignKey: 'category_id' });
Product.belongsToMany(Category, { through: 'ProdutoCategoria', foreignKey: 'product_id' });

// Sincronizar o modelo com o banco de dados    
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Conectado e sincronizado com sucesso');
  })
  .catch(error => {
    console.error('Falha na conexão', error);
  });

module.exports = {
    User,
    Category,
    Product
};

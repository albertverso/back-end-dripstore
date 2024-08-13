const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
// DESESTRUTURACAO
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const app = express()
const port = 10000

const sequelize = new Sequelize('postgresql://postgres.yhogvuqcegpuxhumgkyn:' + 'chuchu-banco-vai-dar-bom' + '@aws-0-us-west-1.pooler.supabase.com:6543/postgres');

const User = sequelize.define(
    'User',
    {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
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

app.use(bodyParser.json()) // middleware
app.use(cors()) // middleware


app.get('/', (req, res) => {
    res.send('Olá, mundo')
})
// /v1/user/chuchu METODOS HTTP

// app.get('/v1/user/:id', (request, res) => {
//     console.log('request.url', request.url) // debug
//     console.log('request.params.id', request.params.id)

//     sequelize.query("SELECT * FROM users where id='" + request.params.id + "'", {
//         type: QueryTypes.SELECT,
//     }).then((result) => res.send(result));
// })

app.get('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    User.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})
// app.post('/v1/user/:name', (request, res) => {
//     console.log('request.url', request.url) // debug
//     console.log('request.params.name', request.params.name)

//     sequelize.query("INSERT INTO users (name, email) values ('" + request.params.name + "', '" + request.params.name + "')", {
//         type: QueryTypes.INSERT,
//     }).then((result) => res.status(201).send(result));
// })

app.post('/v1/user', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    // res.send(request.body)
    User.create(request.body).then((result) => res.status(201).send(result))

    // User.create({ 
    //     firstname: request.params.name, 
    //     surname: request.params.name, 
    //     email: request.params.name, 
    //     password: request.params.name })
    //     .then((result) => res.status(201).send(result));
})


app.put('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    User.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    User.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
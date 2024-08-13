const app = require('./appexpress.js')

const { User } = require('../models/models.js');

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})

app.get('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    User.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})

app.post('/v1/user', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    User.create(request.body).then((result) => res.status(201).send(result))
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
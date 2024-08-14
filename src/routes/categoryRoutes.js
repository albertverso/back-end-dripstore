const app = require('./appexpress.js')

const { Category } = require('../models/models.js');

app.get('/', (req, res) => {
    res.send('Ta iniciando')
})

app.get('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    Category.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})

app.post('/v1/category', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    Category.create(request.body).then((result) => res.status(201).send(result))
})


app.put('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    Category.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    Category.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: '+result)
    })
})


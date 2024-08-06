const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (request, res) => { res.send('Iniciando!') })

app.get('/v1/user/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    const mysql = require('mysql2');

    // Crie uma conexão com o banco de dados
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'dc'
    });

    // Conecte-se ao banco de dados
    connection.connect((err) => {
        if (err) {
            return console.error('Erro ao conectar: ' + err.stack);
        }
        console.log('Conectado como id ' + connection.threadId);


        // Execute uma consulta SQL
        connection.query('select * from dc.usuarios where id=' + request.params.id + ';', (err, results, fields) => {
            if (err) {
                console.error('Erro ao executar consulta: ' + err.stack);
                return;
            }
            console.log('Resultados da consulta:', results);
            res.send(results)
        });

    });

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
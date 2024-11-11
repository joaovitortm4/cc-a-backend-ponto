const express = require ('express');
const app = express();

const sequelize = require('./config/db');
const Usuario = require('./models/Usuario');

Usuario.sync()
    .then(() => {
        console.log("SUCESSO!");
    })
    .catch(error => {
        console.log(`Erro ao sincronizar as tabelas - ${error}`)
    })

sequelize.authenticate()
    .then(() => {
        console.log("Conectei no banco");
    })
    .catch(error => {
        console.log (`Deu erro ao conectar no bd ${error}`)
    });

//app.METODO('ROTA/CAMINHO', (req, res) => {})
app.get('/users', (req, res) => {
    res.send("Nessa rota vou retornar os usuários");
});

app.post('/users', (req, res) => {
    res.send("Rota users usando post");
});

app.get('/user/:id', (req, res) => {
    res.send(`O parametro é ${req.params.id}`);
});

app.post('/user/:id1-:id2', (req, res) => {
    res.send(req.params);
});

const PORT = 3001;

app.listen(PORT, () => {
});
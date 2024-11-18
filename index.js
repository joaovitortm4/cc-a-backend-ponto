const express = require ('express');
const app = express();

const sequelize = require('./config/db');
const Usuario = require('./models/Usuario');
const Ponto = require('./models/Ponto');

app.use(express.json());

sequelize.sync()
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

//Usuario.create ({nome:"João", email:"joaotmarra@gmail.com", login:"jvtm", senha:"joaovitor", permissao:"USER"});

//Rota que recupear todos os usuários da aplicação
app.get('/usuarios', async (req, res) => {

    const usuarios = await Usuario.findAll();
    res.send(usuarios);
});

//Rota que recupera um usuário do bd RELACIONAL
app.get('/usuario/:id_usuario', async (req, res) => {
    
    const usuario = await Usuario.findAll({
        where: {
            id_usuario: req.params.id_usuario,
        },
    });

    res.send(usuario);
});

//rota que cria um usuario
app.post('/usuario', async (req, res) => {
    //Recuperar os parametros passados no body da requisição
    const usuario = await Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        login: req.body.login,
        senha: senha.body.senha,
        permissao:req.body.permissao
    });

    res.send(req.body);
});

const PORT = 3001;

app.listen(PORT, () => {
});
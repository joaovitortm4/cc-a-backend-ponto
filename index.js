const express = require ('express');
const app = express();

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
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'jade');

app.route('/mongo')
    .get((req, res) => {
        listarCursos(res);
    })
    .post((req, res) => {
        var curso = {nome: req.body.nome, categoria: req.body.categoria};

        inserirCurso(curso, () => {
            listarCursos(res);
        })
    })

app.get('/jade', (req, res) => {
    res.render('index', {nome: 'Maikel'});
})

app.get('/abc/:id?', (req, res) => {
    console.log('App responde na porta 8000');
    res.send('Hello World' + req.params.id);
});

app.get(/((sh)|(x))amp(o{2}|u)/, (req, resp) => {
    console.log('App responde na porta 8000');
})

app.listen(8000);

function listarCursos(res) {
    MongoClient.connect('mongodb://localhost:27017/treinaweb', (err, db) => {
        db.collection('cursos').find().sort({nome: 1}).toArray((err, result) => {
            resp.render('index', {data:result});
        })
    });
}

function inserirCurso(ojb, callback) {
    MongoClient.connect('monbodb://localhost:27017/treinaweb', (err, db) => {
        db.collection('cursos').insertOne(obj, (err, result) => {
            callback();
        }) 
    });
}
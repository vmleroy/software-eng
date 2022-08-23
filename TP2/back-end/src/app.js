const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();
app.use(express.json());
app.use(function (req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    next(); 
});

//Conexão com o banco de dados (MongoDB)
mongoose.connect(process.env.DB_CONNECTION.toString());

//Carregando models
const Usuario = require('./models/usuario');
const Aluno = require('./models/aluno');
const Exame = require('./models/exame');
const Empregado = require('./models/empregado');
const CartaoDeCredito = require('./models/cartaoDeCredito');
const Treino = require('./models/treino');
const Exercicios = require('./models/exercicio');
const TipoExercicio = require('./models/tipoExercicio');
const Plano = require('./models/plano');
const Aula = require('./models/aula');


//Carregando rotas
const rotaIndex = require('./routes/rotaIndex');
const rotaUsuario = require('./routes/rotaUsuario');
const rotaAluno = require('./routes/rotaAluno.js');
const rotaExame = require('./routes/rotaExame');
const rotaEmpregado = require('./routes/rotaEmpregado.js');
const rotaCartaoDeCredito = require('./routes/rotaCartaoDeCredito.js');
const rotaTreino = require('./routes/rotaTreino');
const rotaExercicio = require('./routes/rotaExercicio');
const rotaTipoExercicio = require('./routes/rotaTipoExercicio');
const rotaPlano = require('./routes/rotaPlano');
const rotaAula = require('./routes/rotaAula');


// Rotas
app.use('/', rotaIndex);
app.use('/usuarios', rotaUsuario);
app.use('/alunos', rotaAluno);
app.use('/exames', rotaExame);
app.use('/empregados', rotaEmpregado);
app.use('/cartoescredito', rotaCartaoDeCredito);
app.use('/treinos', rotaTreino);
app.use('/exercicios', rotaExercicio);
app.use('/tiposexercicio', rotaTipoExercicio);
app.use('/planos', rotaPlano);
app.use('/aulas', rotaAula);


module.exports = app;
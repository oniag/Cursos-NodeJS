const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config');

//conexão com o banco de dados
const url = config.db_string;
const options = {
  poolSize: 5,
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useNewUrlParser: true
}
mongoose.connect(url, options);

mongoose.connection.on('error', (err) => {
  console.log('Ocorreu um erro na conexão do banco de dados', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('App desconectado do banco de dados');
});

//Body parser, utilizado para receber requisições post do frontend
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use('/', indexRoutes);
app.use('/users', usersRoutes);

app.listen(3000);

module.exports = app;
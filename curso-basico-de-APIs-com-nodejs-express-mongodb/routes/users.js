const express = require('express');
const router = express.Router();
const Users = require('../model/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const createUseToken = require('../util/token');

router.get('/', auth, async (req, res) => {
  try {
    const users = await Users.find({});

    return res.send(users);
  } catch (err) {
    return res.status(500).send({error: 'Erro na consulta de dados'});
  }
});

router.post('/create', async (req, res) => {
  //desestruturação javascript
  const {email, password} = req.body;
  if(!email || !password) return res.status(400).send({error: 'Dados inválidos!'});

  try {
    if(await Users.findOne({email})) return res.status(400).send({error: 'Usuário já cadastrado'});
    
    const user = await Users.create(req.body);
    user.password = undefined;
    return res.status(201).send({user, token: createUseToken(user.id)});
  } catch (err) {
    return res.status(500).send({error: 'Erro ao buscar usuário'});
  }
});

router.post('/auth', async (req, res) => {
  //desestruturação javascript
  const {email, password} = req.body;
  
  if (!email || !password) return res.status(400).send({error: 'Dados inválidos'});

  try {
    const user = await Users.findOne({email}).select('+password');
    if(!user) return res.status(400).send({error: 'Usuário não registrado!'});

    const pass_ok = await bcrypt.compare(password, user.password);
    if(!pass_ok) return res.status(401).send({error: 'Erro ao autenticar usuário'});

    user.password = undefined;
    return res.send({user, token: createUseToken(user.id)});

  } catch (err) {
    return res.status(500).send({error: 'Erro ao buscar usuário'});
  }
});

module.exports = router;


/*
Status code


200 - ok
201 - Created
202 - Accept

400 - Bad request
401 - unauhorized -- Autenticação (tem carácter temporário)
403 - Forbidden -- Autorização (tem carácter permanente)
404 - not found

500 - internal server error
501 - not implemented - Api não suporta essa funcionalidade
503 - Service unavailable - Api não está disponivel
*/
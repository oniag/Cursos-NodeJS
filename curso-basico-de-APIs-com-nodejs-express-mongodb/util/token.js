const jwt = require('jsonwebtoken');
const config = require('../config/config');

const createUseToken = (userId) => {
    return jwt.sign({id: userId,}, config.secret_password, {expiresIn: config.token_expire});
  }

module.exports = createUseToken;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const salt = 10;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false // usado para quando fizer uma busca ele não trazer a senha.
  },
  created: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function (next) {
  let user = this;
  //verifica se o campo de senha foi modificado;
  if (!user.isModified('password')) return next();
  user.password = await bcrypt.hash(user.password, salt);
  return next();
});

module.exports = mongoose.model('User', userSchema);
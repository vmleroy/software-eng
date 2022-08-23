const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Usuario = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Por favor, insira um email válido"],
  },
  senha: {
    type: String,
    required: true,
    length: [6, "Senha deve ter ao menos 6 caracteres"],
  }
});

module.exports = mongoose.model('Usuario', Usuario);
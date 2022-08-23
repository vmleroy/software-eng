const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Plano = new Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: String,
    required: false
  },
  descricao: {
    type: String,
    required: false
  },
  aulas: [{
    type: Schema.Types.ObjectId,
    ref: 'Aula',
    required: true
  }]
});

module.exports = mongoose.model('Plano', Plano);


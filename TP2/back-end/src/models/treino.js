const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Treino = new Schema({
  CPFTreino: {
    type: String,
    required: true
  },
  aluno: {
    type: Schema.Types.ObjectId,
    ref: 'Aluno',
    default: null
  },
  descricao: {
    type: String,
    required: true
  },
  exercicios: [{
    type: Schema.Types.ObjectId,
    ref: 'Exercicio',
    required: true
  }],
});

module.exports = mongoose.model('Treino', Treino);
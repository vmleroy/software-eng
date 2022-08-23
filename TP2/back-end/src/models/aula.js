const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Aula = new Schema({
  aulaNome: {
    type: String,
    required: true,
    enum: ['Crossfit', 'Musculação', 'Natação', 'Ritmos', 'Spinning']
  },
  aulaInicio: {
    type: String
  },
  aulaFim: {
    type: String
  },
  dia: [{
    type: String,
    enum: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
  }],
  maxAlunos: {
    type: Number
  },
  alunosAtivos: {
    type: Number
  },
  taCheia: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Aula', Aula);
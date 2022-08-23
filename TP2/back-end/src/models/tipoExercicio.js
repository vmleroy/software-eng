const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoExercicio = new Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TipoExercicio', TipoExercicio);
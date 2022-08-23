const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartaoDeCredito = new Schema({
  nome: {
    type: String,
    required: true
  },
  numeroCartao: {
    type: String,
    required: true
  },
  CVV: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('CartaoDeCredito', CartaoDeCredito);
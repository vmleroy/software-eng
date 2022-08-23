const mongoose = require('mongoose');
const CartaoDeCredito = mongoose.model('CartaoDeCredito');

exports.get = async (req, res) => {
  await CartaoDeCredito.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.getById = async (req, res) => {
  await CartaoDeCredito.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = async (req, res) => {
  const novoCartaoDeCredito = new CartaoDeCredito(req.body);
  await novoCartaoDeCredito.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = async (req, res) => {
  await CartaoDeCredito.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await CartaoDeCredito.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}
const mongoose = require('mongoose');
const Plano = mongoose.model('Plano');

exports.get = async (req, res) => {
  await Plano.find()
    .populate('aulas')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.getById = async (req, res) => {
  await Plano.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = async (req, res) => {
  const novoPlano = new Plano(req.body);
  await novoPlano.save()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = async (req, res) => {
  await Plano.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await Plano.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
}
const mongoose = require('mongoose');
const Aluno = mongoose.model('Aluno');

exports.get = async (req, res) => {
  await Aluno.find()
    .populate('usuario')
    .populate('planos')
    .populate('exames')
    .populate('cartaoCred')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.getById = async (req, res) => {
  await Aluno.findById(req.params.id)
    .populate('usuario')
    .populate('planos')
    .populate('exames')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = async (req, res) => {
  const novoAluno = new Aluno(req.body);
  await novoAluno.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = async (req, res) => {
  await Aluno.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await Aluno.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}
const mongoose = require('mongoose');
const Treino = mongoose.model('Treino');
const Aluno = mongoose.model('Aluno');

exports.get = async (req, res) => {
  await Treino.find()
    .populate('exercicios')
    .populate('aluno')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.getById = async (req, res) => {
  console.log("Procurando por ID...")
  await Treino.find({ CPFTreino: req.params.id })
    .populate('exercicios')
    .populate('aluno')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      console.log("CPF não encontrado!");
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = async (req, res) => {
  const aluno = await Aluno.find({ CPF: req.body.CPFTreino });
  req.body.aluno = aluno[0]._id;
  const novoTreino = new Treino(req.body);
  await novoTreino.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = async (req, res) => {
  await Treino.findOneAndUpdate({ CPFTreino: req.params.id }, req.body)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await Treino.findOneAndRemove({ CPFTreino: req.params.id })
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}
const mongoose = require('mongoose');
const Exercicio = mongoose.model('Exercicio');

exports.get = async (req, res) => {
  await Exercicio.find()
    .populate('tipoExercicio')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.getById = async (req, res) => {
  await Exercicio.findById(req.params.id)
    .populate('tipoExercicio')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
}

exports.post = async (req, res) => {
  const novoExercicio = new Exercicio(req.body);
  const novoExercicioFind = await Exercicio.findOne({tipoExercicio: req.body.tipoExercicio, series: req.body.series, repeticoes: req.body.repeticoes});
  
  if (novoExercicioFind != null) {
    res.status(200).send(novoExercicioFind);
  } else {
    novoExercicio.save()
      .then(result => {
        res.status(201).json(result);
      }).catch(err => {
        res.status(500).json({
          message: err.message
        });
      });
  }
}

exports.put = async (req, res) => {
  await Exercicio.findByIdAndUpdate(req.params.id, req.body)
    .then(result =>{
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await Exercicio.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result)
    }).catch(err =>{
      res.status(500).json({
        message: err.message
      })
    });
}
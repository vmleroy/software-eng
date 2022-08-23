const mongoose = require('mongoose');
const TipoExercicio = mongoose.model('TipoExercicio');

exports.get = async (req, res) => {
  await TipoExercicio.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(200).json({
        message: err.message
      })
    });
}

exports.getById = async (req, res) => {
  await TipoExercicio.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = async (req, res) => {
  const novoTipoExercicio = new TipoExercicio(req.body)
  await novoTipoExercicio.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = async (req, res) => {
  await TipoExercicio.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = async (req, res) => {
  await TipoExercicio.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}


const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const Aluno = mongoose.model('Aluno');
const Empregado = mongoose.model('Empregado');

exports.get = async (req, res) => {
   await Usuario.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.getById = async (req, res) => {
  await Usuario.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.login = (req, res) => {
  Usuario.findOne({email:req.body.email, senha:req.body.senha})
      .then(async result => {
        if (result === null) {
          res.status(500).json({
            message: 'Email e/ou senha inválidos'
          });
        }
        else {
          const resultAluno = await Aluno.findOne({usuario: result._id})
          const resultEmpregado = await Empregado.findOne({usuario: result._id})
          if (resultEmpregado != null) result = {"id": resultEmpregado._id, "tipo": resultEmpregado.cargo}
          if (resultAluno != null) result = {"id": resultAluno._id, "tipo": "aluno"}
          res.status(200).send(result);
        }
      })
}

exports.post = async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save(req.body)
    .then(result => {
      res.status(201).json({
        message: 'Usuário criado com sucesso',
        usuarioCriado: result
      });
    }).catch(err => {
      if (err.code === 11000) {
        res.status(409).json({
          message: 'Email já existente'
        });
      } else {
        res.status(500).json({
          message: err.message
        });
      }
    });
}

exports.put = async (req, res) => {
  await Usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
  });
}

exports.delete = async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}


const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send(    {
      titulo: "Trabalho Prático 2 - Engenharia de Software",
      versao: "1.0.0"
    });
});

module.exports = router;
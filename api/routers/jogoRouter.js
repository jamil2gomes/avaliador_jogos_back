const {Router} = require('express');
const JogoController = require('../controllers/JogoController');

const roteadorComentario = require('./comentarioRouter');

const router = Router();

router
.options('/jogos', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
})
.get('/jogos', JogoController.pegarTodosJogos)
.get('/jogos/:id', JogoController.pegarJogoPorId)
.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario)

module.exports = router;
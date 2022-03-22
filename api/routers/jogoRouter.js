const {Router} = require('express');
const JogoController = require('../controllers/JogoController');

const roteadorComentario = require('./comentarioRouter');

const router = Router();

router.options('/jogos', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
})

.get('/jogos', JogoController.pegarJogosParaTelaInicial)
.post('/jogos', JogoController.criarJogo)
.get('/jogos/:id', JogoController.pegarDetalhesJogo)

.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario);

module.exports = router;
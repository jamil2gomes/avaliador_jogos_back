const {Router} = require('express');
const JogoController = require('../controllers/JogoController');
const passport = require('passport');


const roteadorComentario = require('./comentarioRouter');
const roteadorAvaliacao = require('./avaliacaoRouter');
const router = Router();

router
.options('/jogos', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', '*')
  resposta.status(204).end();
})

.get('/jogos', JogoController.pegarJogosParaTelaInicial)
.post('/jogos', JogoController.criarJogo)
router
.options('/jogos/:id', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET');
  resposta.set('Access-Control-Allow-Headers', '*')
  resposta.status(204).end();
})
.get('/jogos/:id', JogoController.pegarDetalhesJogo)


router
.options('/jogos/:id/plataformas', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET');
  resposta.set('Access-Control-Allow-Headers', '*')
  resposta.status(204).end();
})
.get('/jogos/:id/plataformas', JogoController.pegarPlataformasDadoJogo)

.use(
  '/jogos/:idJogo/avaliacao/', 
  JogoController.verificarJogo, 
  roteadorAvaliacao
  )

.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario);

module.exports = router;
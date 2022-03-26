const {Router} = require('express');
const JogoController = require('../controllers/JogoController');
const passport = require('passport');


const roteadorComentario = require('./comentarioRouter');
const roteadorAvaliacao = require('./avaliacaoRouter');
const router = Router();

router
.options('/jogos', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
})

.get('/jogos', JogoController.pegarJogosParaTelaInicial)
.post('/jogos', passport.authenticate('bearer',{session:false}), JogoController.criarJogo)
.get('/jogos/:id', JogoController.pegarDetalhesJogo)

.use(
  '/jogos/:idJogo/avaliacao/', 
  JogoController.verificarJogo, 
  roteadorAvaliacao
  )

.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario);

module.exports = router;
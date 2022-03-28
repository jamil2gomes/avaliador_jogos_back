const {Router} = require('express');
const JogoController = require('../controllers/JogoController');
const passport = require('passport');


const roteadorComentario = require('./comentarioRouter');
const roteadorAvaliacao = require('./avaliacaoRouter');
const router = Router();



router.get('/jogos', JogoController.pegarJogosParaTelaInicial)
router.post('/jogos', JogoController.criarJogo)
router.get('/jogos/:id', JogoController.pegarDetalhesJogo)
router.get('/jogos/:id/plataformas', JogoController.pegarPlataformasDadoJogo)

router.use(
  '/jogos/:idJogo/avaliacao/', 
  JogoController.verificarJogo, 
  roteadorAvaliacao
  )

router.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario);

module.exports = router;
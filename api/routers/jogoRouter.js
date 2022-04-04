const {Router} = require('express');
const JogoController = require('../controllers/JogoController');
const middewaresAuth =require('../estrategias/middlewaresAuth')


const roteadorComentario = require('./comentarioRouter');
const roteadorAvaliacao = require('./avaliacaoRouter');
const router = Router();



router.get('/jogos', JogoController.pegarJogosParaTelaInicial)
router.post('/jogos',middewaresAuth.bearer, JogoController.criarJogo)
router.get('/jogos/:id', JogoController.pegarDetalhesJogo)
router.get('/jogos/:id/plataformas', JogoController.pegarPlataformasDadoJogo)

router.use(
  '/jogos/:idJogo/avaliacao/', 
  JogoController.verificarJogo, 
  roteadorAvaliacao
  )

router.use('/jogos/:idJogo/comentarios/', JogoController.verificarJogo, roteadorComentario);

module.exports = router;
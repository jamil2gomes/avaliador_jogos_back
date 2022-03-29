const {Router} = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController');
const passport = require('passport');

const router = Router();



router.get('/', AvaliacaoController.pegarTodasAvaliacoesDadoJogo);



router.get('/usuario/:idUsuario', AvaliacaoController.pegarAvaliacaoDoJogoDoUsuario);

router.get('/plataformas', AvaliacaoController.pegarTodasAvaliacoesDoJogoPorPlataforma);

//rotas com autenticacao
router.post('/',passport.authenticate('bearer',{session:false}), AvaliacaoController.criarAvaliacao);
router.put('/:avaliacaoId', passport.authenticate('bearer',{session:false}), AvaliacaoController.atualizarAvaliacao);
router.delete('/:avaliacaoId',passport.authenticate('bearer',{session:false}), AvaliacaoController.deletarAvaliacao);


router.get('/plataformas/:plataformaId', AvaliacaoController.pegarTodasAvaliacoesDadoJogoDadoPlataforma);


module.exports = router;
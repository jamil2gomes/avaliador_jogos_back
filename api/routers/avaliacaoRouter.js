const {Router} = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController');


const router = Router();



router.get('/', AvaliacaoController.pegarTodasAvaliacoesDadoJogo);
router.post('/', AvaliacaoController.criarAvaliacao);


router.get('/usuario/:idUsuario', AvaliacaoController.pegarAvaliacaoDoJogoDoUsuario);

router.get('/plataformas', AvaliacaoController.pegarTodasAvaliacoesDoJogoPorPlataforma);

router.put('/:avaliacaoId', AvaliacaoController.atualizarAvaliacao);
router.delete('/:avaliacaoId', AvaliacaoController.deletarAvaliacao);


router.get('/plataformas/:plataformaId', AvaliacaoController.pegarTodasAvaliacoesDadoJogoDadoPlataforma);


module.exports = router;
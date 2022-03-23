const {Router} = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController');


const router = Router();

router.options('/', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
});

router.get('/', AvaliacaoController.pegarTodasAvaliacoesDadoJogo);
router.post('/', AvaliacaoController.criarAvaliacao);


router.get('/usuario/:idUsuario', AvaliacaoController.pegarAvaliacaoDoJogoDoUsuario);


router.options('/:avaliacaoId', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'PUT, DELETE');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
})
router.put('/:avaliacaoId', AvaliacaoController.atualizarAvaliacao);
router.delete('/:avaliacaoId', AvaliacaoController.pegarTodasAvaliacoesDadoJogo);


module.exports = router;
const {Router} = require('express');
const AvaliacaoController = require('../controllers/AvaliacaoController');


const router = Router();

router.options('/', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
})

.get('/usuario/:idUsuario', AvaliacaoController.pegarAvaliacaoDoJogoDoUsuario)

.get('/', AvaliacaoController.pegarTodasAvaliacoesDadoJogo);


module.exports = router;
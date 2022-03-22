const {Router} = require('express');
const UsuarioController = require('../controllers/UsuarioController');


const router = Router();

router.options('/usuario', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.post('/usuario', UsuarioController.criarUsuario);


module.exports = router;
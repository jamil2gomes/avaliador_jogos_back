const {Router} = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const passport = require('passport');

const router = Router();

router.options('/usuario', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
});

router.post('/usuario', UsuarioController.criarUsuario);

router.post(
  '/usuario/login',
  passport.authenticate('local',{session:false}),
  UsuarioController.login);


module.exports = router;
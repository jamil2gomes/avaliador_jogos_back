const {Router} = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const middewaresAuth = require('../estrategias/middlewaresAuth');

const router = Router();

router.post('/usuario', UsuarioController.criarUsuario);
router.post('/usuario/login/google', UsuarioController.loginGoogle);
router.post(
  '/usuario/login',
  middewaresAuth.local,
  UsuarioController.login);


module.exports = router;
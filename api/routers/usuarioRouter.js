const {Router} = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const passport = require('passport');

const router = Router();


router.post('/usuario', UsuarioController.criarUsuario);

router.post(
  '/usuario/login',
  passport.authenticate('local',{session:false}),
  UsuarioController.login);


module.exports = router;
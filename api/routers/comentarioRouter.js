const {Router} = require('express');
const ComentarioController = require('../controllers/ComentarioController');
const passport = require('passport');

const router = Router();


router.get('/', ComentarioController.pegarTodosComentarios)
router.get('/usuarios/:usuarioId', ComentarioController.pegarComentarioDoUsuarioSobreOJogo)
router.post('/', passport.authenticate('bearer',{session:false}), ComentarioController.cadastrarComentario)

router.put('/usuarios/:usuarioId', ComentarioController.atualizarComentario)


module.exports = router;
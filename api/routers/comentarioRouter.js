const {Router} = require('express');
const ComentarioController = require('../controllers/ComentarioController');
const middewaresAuth = require('../estrategias/middlewaresAuth');

const router = Router();


router.get('/', ComentarioController.pegarTodosComentarios)
router.get('/usuarios/:usuarioId', ComentarioController.pegarComentarioDoUsuarioSobreOJogo)
router.post('/', middewaresAuth.bearer, ComentarioController.cadastrarComentario)
router.delete('/usuarios/:usuarioId',middewaresAuth.bearer, ComentarioController.deletarComentario)
router.put('/usuarios/:usuarioId', ComentarioController.atualizarComentario)


module.exports = router;
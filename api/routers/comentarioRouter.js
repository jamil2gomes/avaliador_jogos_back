const {Router} = require('express');
const ComentarioController = require('../controllers/ComentarioController');


const router = Router();


router.get('/', ComentarioController.pegarTodosComentarios)
router.post('/', ComentarioController.cadastrarComentario)


module.exports = router;
const {Router} = require('express');
const ComentarioController = require('../controllers/ComentarioController');


const router = Router();

router.options('/', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.get('/', ComentarioController.pegarTodosComentarios);




module.exports = router;
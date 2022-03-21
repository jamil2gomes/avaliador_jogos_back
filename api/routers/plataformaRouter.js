const {Router} = require('express');
const PlataformaController = require('../controllers/PlataformaController');


const router = Router();

router.options('/plataformas', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
});

router.get('/plataformas', PlataformaController.pegarTodosGeneros);
router.get('/plataformas/:id', PlataformaController.pegarTodosPorId);



module.exports = router;
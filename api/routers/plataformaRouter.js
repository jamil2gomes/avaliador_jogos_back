const {Router} = require('express');
const PlataformaController = require('../controllers/PlataformaController');


const router = Router();

router
.options('/plataformas', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type,  x-access-key');
  resposta.status(204).end();
})

.get('/plataformas', PlataformaController.pegarTodosGeneros)
.get('/plataformas/:id', PlataformaController.pegarTodosPorId)



module.exports = router;
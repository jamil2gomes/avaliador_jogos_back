const {Router} = require('express');
const GeneroController = require('../controllers/GeneroController');


const router = Router();

router
.options('/generos', (requisicao, resposta) => {
  resposta.set('Access-Control-Allow-Methods', 'GET, POST');
  resposta.set('Access-Control-Allow-Headers', 'Content-Type');
  resposta.status(204).end();
})
.get('/generos', GeneroController.pegarTodosGeneros)
.get('/generos/:id', GeneroController.pegarTodosPorId);



module.exports = router;
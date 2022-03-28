const {Router} = require('express');
const PlataformaController = require('../controllers/PlataformaController');


const router = Router();

router.get('/plataformas', PlataformaController.pegarTodosGeneros)
      .get('/plataformas/:id', PlataformaController.pegarTodosPorId)



module.exports = router;
const {Router} = require('express');
const GeneroController = require('../controllers/GeneroController');


const router = Router();

router.get('/generos', GeneroController.pegarTodosGeneros);
router.get('/generos/:id', GeneroController.pegarTodosPorId);



module.exports = router;

const service = require('../services/plataformaService');


class PlataformaController{

  static async pegarTodosGeneros(requisicao, resposta, proximo){
    try {
      const generos = await service.getAll();

      resposta.status(200).send(generos);
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarTodosPorId(requisicao, resposta, proximo){
    
    try {
      const {id} = requisicao.params;
      const generos = await service.getBy(id);

      resposta.status(200).send(generos);
    } catch (error) {
      proximo(error);
    }
  }

}

module.exports = PlataformaController;

const service = require('../services/comentarioService');


class ComentarioController{

  static async pegarTodosComentarios(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      console.log(jogoId, requisicao.jogo.id)
      const comentarios = await service.pegarComentariosDadoJogo(jogoId);
      resposta.status(200).send(comentarios);
    } catch (error) {
      proximo(error);
    }
  }

  static async cadastrarComentario(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      const dadosRecebidos = requisicao.body;
      const comentario = await service.cadastrarComentario(dadosRecebidos,jogoId);
      resposta.status(200).send(comentario);
    } catch (error) {
      proximo(error);
    }
  }
}

module.exports = ComentarioController;
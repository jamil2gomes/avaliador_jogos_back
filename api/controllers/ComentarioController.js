
const service = require('../services/comentarioService');


class ComentarioController{

 
  static async cadastrarComentario(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      const dadosRecebidos = requisicao.body;
      await service.cadastrarComentario(dadosRecebidos,jogoId);
      resposta.status(201).end();
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarTodosComentariosDadoJogo(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      
      const response = await service.pegarTodosComentariosDadoJogo(jogoId);
      resposta.status(200).send(response);
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarComentarioDoUsuarioSobreOJogo(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      const {usuarioId} = requisicao.params;
      const comentario = await service.pegarComentarioDoUsuarioSobreOJogo(jogoId, usuarioId);
      resposta.status(200).send(comentario);
    } catch (error) {
      proximo(error);
    }
  }

  static async deletarComentario(requisicao, resposta, proximo){
    try {
      const jogoId = requisicao.jogo.id;
      const {usuarioId} = requisicao.params;
      await service.deletarComentario(jogoId, usuarioId);
      resposta.status(204).end();
    } catch (error) {
      proximo(error);
    }
  }

}

module.exports = ComentarioController;
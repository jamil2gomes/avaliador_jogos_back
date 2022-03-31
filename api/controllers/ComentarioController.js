
const service = require('../services/comentarioService');


class ComentarioController{

  static async pegarTodosComentarios(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
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
      await service.cadastrarComentario(dadosRecebidos,jogoId);
      resposta.status(201).end();
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

  static async atualizarComentario(requisicao, resposta, proximo){
    
    try {
      const jogoId = requisicao.jogo.id;
      const {usuarioId} = requisicao.params;
      const dadosRecebidos = requisicao.body;
      const comentario = await service.atualizarComentario(dadosRecebidos,jogoId, usuarioId);
      resposta.status(200).send(comentario);
    } catch (error) {
      proximo(error);
    }
  }
}

module.exports = ComentarioController;
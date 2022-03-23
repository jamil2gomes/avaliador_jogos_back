
const service = require('../services/avaliacaoService');


class AvaliacaoController{

  static async pegarAvaliacaoDoJogoDoUsuario(requisicao, resposta, proximo){

    const jogoId = requisicao.jogo.id;
    const{idUsuario} = requisicao.params;
    try {
      const avaliacao = await service.pegarAvaliacaoDoJogoDoUsuario(jogoId, idUsuario);
      resposta.status(200).send(avaliacao);
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarTodasAvaliacoesDadoJogo(requisicao, resposta, proximo){

    const jogoId = requisicao.jogo.id;
    
    try {
      const avaliacao = await service.pegarTodasAvaliacoesDadoJogo(jogoId);
      resposta.status(200).send(avaliacao);
    } catch (error) {
      proximo(error);
    }
  }

  static async criarAvaliacao(requisicao, resposta, proximo){

    const jogo_id = requisicao.jogo.id;
    const dadosRecebidos = requisicao.body;
    const dados = {...dadosRecebidos, jogo_id};
    
    try {
      await service.criarAvaliacao(dados);
      resposta.status(201).end();
    } catch (error) {
      proximo(error);
    }
  }

  static async atualizarAvaliacao(requisicao, resposta, proximo){

    const jogo_id = requisicao.jogo.id;
    const id = requisicao.params.avaliacaoId;
    const dadosRecebidos = requisicao.body;
    const dados = {...dadosRecebidos, jogo_id, id};
    
    try {
      await service.editarAvaliacaoDoJogo(dados);
      resposta.status(204).end();
    } catch (error) {
      proximo(error);
    }
  }
}

module.exports = AvaliacaoController;

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
}

module.exports = AvaliacaoController;
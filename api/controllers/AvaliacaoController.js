
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

  static async pegarTodasAvaliacoesDoJogoPorPlataforma(requisicao, resposta, proximo){

    const jogoId = requisicao.jogo.id;
    
    try {
      const avaliacao = await service.pegarTodasAvaliacoesDoJogoPorPlataforma(jogoId);
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
      await service.cadastrarAvaliacao(dados);
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

  static async deletarAvaliacao(requisicao, resposta, proximo){

    const id = requisicao.params.avaliacaoId;
    try {
      await service.deletarAvaliacao(id);
      resposta.status(204).end();
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarTodasAvaliacoesDadoJogoDadoPlataforma(requisicao, resposta, proximo){
    const jogoId = requisicao.jogo.id;
    const plataformaId = requisicao.params.plataformaId;
    try {
      const avaliacao = await service.pegarTodasAvaliacoesDadoJogoDadoPlataforma(jogoId, plataformaId);
      resposta.status(200).send(avaliacao);
    } catch (error) {
      proximo(error);
    }
  }
}

module.exports = AvaliacaoController;
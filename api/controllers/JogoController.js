
const service = require('../services/jogoService');




class JogoController{

  static async pegarDetalhesJogo(requisicao, resposta, proximo){
    const {id} = requisicao.params;
    try {
      const jogos = await service.getAll(id);
      resposta.status(200).send(jogos);
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarJogosParaTelaInicial(requisicao, resposta, proximo){
    try {
      const jogos = await service.pegaTodosParaTelaInicial();
      resposta.status(200).send(jogos);
    } catch (error) {
      proximo(error);
    }
  }

  static async pegarJogoPorId(requisicao, resposta, proximo){
    
    try {
      const {id} = requisicao.params;
      const jogo = await service.getBy(id);
      resposta.status(200).send(jogo);
    } catch (error) {
      proximo(error);
    }
  }

  static async criarJogo(requisicao, resposta, proximo){
    
    try {
      const dadosRecebidos = requisicao.body;
      const jogo = await service.create(dadosRecebidos);
      console.log(jogo)
      resposta.status(204).send(jogo);
    } catch (error) {
      proximo(error);
    }
  }

  static async verificarJogo(requisicao, resposta, proximo){
    
    try {
      const id = requisicao.params.idJogo;
      const jogo =  await service.getBy(id);
      requisicao.jogo = jogo;
      proximo();
    } catch (error) {
      proximo(error);
    }
  }

}

module.exports = JogoController;
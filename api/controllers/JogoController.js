
const service = require('../services/jogoService');




class JogoController{

  static async pegarTodosJogos(requisicao, resposta, proximo){
    try {
      const jogos = await service.getAll();
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
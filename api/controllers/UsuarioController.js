
const service = require('../services/usuarioService');




class UsuarioController{

  
  static async criarUsuario(requisicao, resposta, proximo){
    
    try {
      const dadosRecebidos = requisicao.body;
      await service.create(dadosRecebidos);
      resposta.status(201).end();
    } catch (error) {
      proximo(error);
    }
  }

  static login(requisicao, resposta){
    resposta.status(204).end();
  }


}

module.exports = UsuarioController;
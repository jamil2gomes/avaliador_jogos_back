
const service = require('../services/usuarioService');




class UsuarioController{

  
  static async criarUsuario(requisicao, resposta, proximo){
    
    try {
      const dadosRecebidos = requisicao.body;
      const usuario = await service.create(dadosRecebidos);

      resposta.status(201).send(usuario);
    } catch (error) {
      proximo(error);
    }
  }

}

module.exports = UsuarioController;
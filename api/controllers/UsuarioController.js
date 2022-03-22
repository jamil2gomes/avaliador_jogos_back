
const service = require('../services/usuarioService');
const jwt = require('jsonwebtoken');


function criaTokenJWT(usuario){
  const payload={
    id:usuario.id
  };

  //criar uma variavel de ambiente no .env na raiz do projeto a partir 
  //do crypto depois usar o dotenv para usar no projeto
  const token = jwt.sign(payload, process.env.CHAVE_JWT);

  return token;
}


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
    const token = criaTokenJWT(requisicao.user);
    resposta.set('Authorization', token);
    resposta.status(204).end();
  }


}

module.exports = UsuarioController;
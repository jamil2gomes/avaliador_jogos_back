
const service = require('../services/usuarioService');
const jwt = require('jsonwebtoken');


function criaTokenJWT(usuario){
  const payload={
    id:usuario.id
  };

  /*
    Criar uma variavel de ambiente no .env na raiz do projeto a partir 
    do crypto com o seguinte comando
    node -e "console.log(require('crypto').randomBytes(256).toString('base64'))"
    depois usar o dotenv require('dotgit comenv').config(); para usar no projeto no index
  */
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

  static async loginGoogle(requisicao, resposta, proximo){
    
    try {
      const {email, name, googleId} = requisicao.body;
      const usuario = await service.createOrFind(email, name, googleId);
      const token = criaTokenJWT(usuario);

      resposta.status(200).send({
        id: usuario.id,
        nome: usuario.nome,
        role: usuario.role,
        token:token
      });
    } catch (error) {
      proximo(error);
    }
  }

  static login(requisicao, resposta){
    const token = criaTokenJWT(requisicao.user);

    resposta.status(200).send({
      id: requisicao.user.id,
      nome: requisicao.user.nome,
      role: requisicao.user.role,
      token:token
    });
  }
}

module.exports = UsuarioController;
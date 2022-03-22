const Usuarios = require('../models').Usuarios;
const NaoEncontrado = require('../erros/NaoEncontrado');
const bcrypt = require('bcrypt');

module.exports = {

  async getAll(){
    return await Generos.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order:[
        ['descricao', 'ASC']
      ]
    });
  },

 async gerarSenhaHash(senha){
    const custo = 12;
    return await bcrypt.hash(senha, custo);
  },
   
  async create(usuario){
    const senhaHash =  await this.gerarSenhaHash(usuario.senha);

    return await Usuarios.create({
      nome:usuario.nome,
      email: usuario.email,
      senha: senhaHash,
      nickname:usuario.nickname
    });
  },

}
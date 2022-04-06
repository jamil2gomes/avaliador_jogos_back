const Usuarios = require('../models').Usuarios;
const EmailExistente = require('../erros/EmailExistente');
const bcrypt = require('bcrypt');

module.exports = {

  async getAll(){
    return await Usuarios.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order:[
        ['descricao', 'ASC']
      ]
    });
  },
  async getBy(id){
    return await Usuarios.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where:{id}
    });
  },

 async gerarSenhaHash(senha){
    const custo = 12;
    return await bcrypt.hash(senha, custo);
  },
   
  async create(usuario){
    const usuarioExistente = Usuarios.findOne({where:{email:usuario.email}});

    if(usuarioExistente)
        throw new EmailExistente();

    const senhaHash =  await this.gerarSenhaHash(usuario.senha);

    return await Usuarios.create({
      nome:usuario.nome,
      email: usuario.email,
      senha: senhaHash,
    });
  },

  async createOrFind(email, name, googleId, imageUrl){

    const senhaHash =  await this.gerarSenhaHash(googleId);

    const [usuario, created] = await Usuarios.findOrCreate({
      where:{
        email
      },
      defaults:{
        nome: name,
        senha: senhaHash,
      },
      raw:true
    });

    return usuario;
  },

}
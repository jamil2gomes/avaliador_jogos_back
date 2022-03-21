const Plataformas = require('../models').Plataformas;
const NaoEncontrado = require('../erros/NaoEncontrado');

module.exports = {

  async getAll(){
    return await Plataformas.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order:[
        ['descricao', 'ASC']
      ]
    });
  },
   
  async getBy(id){
    const plataforma = await Plataformas.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where:{id:id},
    });
  
    if(!plataforma)
      throw new NaoEncontrado("Plataforma");

    return plataforma;
  },

}
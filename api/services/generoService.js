const Generos = require('../models').Generos;
const NaoEncontrado = require('../erros/NaoEncontrado');

module.exports = {

  async getAll(){
    return await Generos.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order:[
        ['descricao', 'ASC']
      ]
    });
  },
   
  async getBy(id){
    const genero = await Generos.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where:{id:id},
    });
  
    if(!genero)
      throw new NaoEncontrado("Gênero");

    return genero;
  },

}
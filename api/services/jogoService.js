const Jogos = require('../models').Jogos;
const NaoEncontrado = require('../erros/NaoEncontrado');

module.exports = {

  async getAll(){
    return await Jogos.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      order:[
        ['nome', 'ASC']
      ]
    });
  },
   
  async getBy(id){
    const jogo = await Jogos.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where:{id:id},
    });
  
    if(!jogo)
      throw new NaoEncontrado("Jogo");

    return jogo;
  },

}
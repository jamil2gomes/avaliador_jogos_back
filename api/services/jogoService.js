const Jogos = require('../models').Jogos;
const Generos = require('../models').Generos;
const Plataformas = require('../models').Plataformas;
const model = require('../models');
const NaoEncontrado = require('../erros/NaoEncontrado');

module.exports = {

  async getAll(id){
    const jogos =  await Jogos.findOne({
      where:{
        id
      },
      include:[
       {
        model:Generos,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: {attributes: []},
        required: true  
      },
       {
        model:Plataformas,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: {attributes: []},
        required: true
      }
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    return jogos;
  },

  async getAllPlataformasPorJogo(id){
    const jogos =  await Jogos.findOne({
      where:{
        id
      },
     
       include:{
        model:Plataformas,
        attributes: { include:['descricao','label'], exclude: ['createdAt', 'updatedAt'] },
        through: {attributes: []},
        required: true
      },
      
      attributes: { 
        exclude: [
        'createdAt', 
        'updatedAt', 
        'status', 
        'usuario_id', 
        'sinopse'
      ] 
    }
    });
    return jogos;
  },

  async pegaTodosParaTelaInicial(){
    const jogos =  await Jogos.findAll({
      attributes: [
        'id', 
        'nome', 
        'data_lancamento', 
        'imagem_url'
      ],
      where:{
        status:'APROVADO'
      }
    });

    return jogos;
  },


  async create(dadosRecebidos){
    
    
      const jogo = await Jogos.create({
        nome: dadosRecebidos.nome,
        sinopse:dadosRecebidos.sinopse,
        data_lancamento: dadosRecebidos.data_lancamento,
        desenvolvedora:dadosRecebidos.desenvolvedora,
        imagem_url: dadosRecebidos.imagem_url,
        usuario_id: dadosRecebidos.usuario_id,
      });
  
      await jogo.setGeneros(dadosRecebidos.generos);
      await jogo.setPlataformas(dadosRecebidos.plataformas);

      return jogo;

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
const Avaliacoes = require('../models').Avaliacoes;
const Sequelize = require('sequelize');
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');
module.exports = {


  //MEDIA DADA PELO JOGADOR
  async pegarAvaliacaoDoJogoDoUsuario(jogo_id, usuario_id) {
    const resposta = await Avaliacoes.findOne({
      attributes:['audio', 'feedback', 'cores', 'interface'],
      where:{
        jogo_id:jogo_id,
        usuario_id:usuario_id
      },
      raw:true,
    });

    const media = (
      parseFloat(resposta.audio) 
    + parseFloat(resposta.feedback) 
    + parseFloat(resposta.cores) 
    + parseFloat(resposta.interface))/4.0;

    const data = {...resposta, media:Number(media.toFixed(2))};

    return data;
  
  },

  async editarAvaliacaoDoJogo(dadosRecebidos, jogo_id, usuario_id) {
    const avaliacao = await Avaliacoes.findOne({
      where:{
        jogo_id:jogo_id,
        usuario_id:usuario_id
      },
      raw:true,
    });

    if(!resposta) throw new NaoEncontrado('Avaliação');

  const campos = ['audio', 'feedback', 'cores', 'interface'];
  const dadosParaAtualizar = {};

  campos.forEach((campo) => {
    const valor = avaliacao[campo]

    if (campo === 'audio' && typeof valor === 'number') {
      dadosParaAtualizar[campo] = valor;
    }
    if (campo === 'feedback' && typeof valor === 'number') {
      dadosParaAtualizar[campo] = valor;
    }
    if (campo === 'cores' && typeof valor === 'number') {
      dadosParaAtualizar[campo] = valor;
    }
    if (campo === 'interface' && typeof valor === 'number') {
      dadosParaAtualizar[campo] = valor;
    }
  })

  if (Object.keys(dadosParaAtualizar).length === 0) {
    throw new DadosNaoFornecidos();
  }

    await Avaliacoes.update(
      dadosRecebidos,
      {
        where: { 
          jogo_id: jogo_id,
          usuario_id:usuario_id
        }
      })
  
  },

  //MEDIA TOTAL DO JOGO
  async pegarTodasAvaliacoesDadoJogo(jogo_id) {
    const resposta =  await Avaliacoes.findOne({
      attributes:[
        [Sequelize.fn('AVG', Sequelize.col('audio')),'audio'],
        [Sequelize.fn('AVG', Sequelize.col('feedback')),'feedback'],
        [Sequelize.fn('AVG', Sequelize.col('cores')),'cores'],
        [Sequelize.fn('AVG', Sequelize.col('interface')),'interface'],
      ],
      where:{
        jogo_id:jogo_id,
      },
      raw:true,
    });
 
    const media = (
      parseFloat(resposta.audio) 
    + parseFloat(resposta.feedback) 
    + parseFloat(resposta.cores) 
    + parseFloat(resposta.interface))/4.0;

    return {media:media.toFixed(2)}

  },




}
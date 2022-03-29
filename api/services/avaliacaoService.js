const Avaliacoes = require('../models').Avaliacoes;
const Plataformas = require('../models').Plataformas;
const Sequelize = require('sequelize');
const NaoEncontrado = require('../erros/NaoEncontrado');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');
module.exports = {


  //MEDIA DADA PELO JOGADOR
  async pegarAvaliacaoDoJogoDoUsuario(jogo_id, usuario_id) {
    
    const resposta = await Avaliacoes.findOne({
      attributes:['id', 'audio', 'feedback', 'cores', 'interface'],
      where:{
        jogo_id:jogo_id,
        usuario_id:usuario_id
      },
      raw:true,
    });

    if(!resposta)
      return {mensagem:"Sem avaliação registrada"}

    const media = this._calcularMediaDaAvaliacao(resposta);

    const data = {...resposta, media:media};

    return data;
  
  },

  _calcularMediaDaAvaliacao(dados){
    const media = (
      parseFloat(dados.audio) 
    + parseFloat(dados.feedback) 
    + parseFloat(dados.cores) 
    + parseFloat(dados.interface))/4.0;

    return media.toFixed(1);
  },


  _validarDadosAntesDeAtualizar(dados){
    const campos = ['audio', 'feedback', 'cores', 'interface'];
    const dadosParaAtualizar = {};
  
    campos.forEach((campo) => {
      const valor = dados[campo];
  
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
    });
  
    if (Object.keys(dadosParaAtualizar).length === 0) {
      throw new DadosNaoFornecidos();
    }

    return dadosParaAtualizar;
  },

  async editarAvaliacaoDoJogo(dadosRecebidos) {
    const avaliacao = await Avaliacoes.findOne({
      where:{
        jogo_id:dadosRecebidos.jogo_id,
        usuario_id:dadosRecebidos.usuario_id,
        id: dadosRecebidos.id,
      },
      raw:true,
    });

  if(!avaliacao) throw new NaoEncontrado('Avaliação');

  const dadosParaAtualizar = this._validarDadosAntesDeAtualizar(dadosRecebidos);

    await Avaliacoes.update(
      dadosParaAtualizar,
      {
        where: { 
          jogo_id: dadosRecebidos.jogo_id,
          usuario_id:dadosRecebidos.usuario_id
        }
      })
  
  },

  //MEDIA TOTAL DO JOGO
  async pegarTodasAvaliacoesDadoJogo(jogo_id) {
    const resposta =  await Avaliacoes.findAndCountAll({
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

    if(resposta.rows.length !== 0){
      const media = this._calcularMediaDaAvaliacao(resposta.rows[0]);
      return {media:media, quantidaAvaliacoes:resposta.count, medias: {
        Audio: parseFloat(resposta.rows[0].audio).toFixed(1),
        Feedback: parseFloat(resposta.rows[0].feedback).toFixed(1),
        Cores: parseFloat(resposta.rows[0].cores).toFixed(1),
        Interface: parseFloat(resposta.rows[0].interface).toFixed(1),
      }}
    }

    return {media:0.0, 
      quantidaAvaliacoes:resposta.count, 
      medias: {}
    }
  },

  async pegarTodasAvaliacoesDoJogoPorPlataforma(jogo_id) {
    const resposta =  await Avaliacoes.findAll({
      attributes:[
        [Sequelize.fn('AVG', Sequelize.col('audio')),'audio'],
        [Sequelize.fn('AVG', Sequelize.col('feedback')),'feedback'],
        [Sequelize.fn('AVG', Sequelize.col('cores')),'cores'],
        [Sequelize.fn('AVG', Sequelize.col('interface')),'interface'],
        'plataforma_id'
      ],
      include:{
        model:Plataformas,
        attributes:['descricao']
      },
      where:{
        jogo_id:jogo_id,
      },
      group: 'plataforma_id',
    });

    return {medias: resposta}

  },

  async pegarTodasAvaliacoesDadoJogoDadoPlataforma(jogo_id, plataforma_id) {
    const resposta =  await Avaliacoes.findAndCountAll({
      attributes:[
        [Sequelize.fn('AVG', Sequelize.col('audio')),'audio'],
        [Sequelize.fn('AVG', Sequelize.col('feedback')),'feedback'],
        [Sequelize.fn('AVG', Sequelize.col('cores')),'cores'],
        [Sequelize.fn('AVG', Sequelize.col('interface')),'interface'],
      ],
      where:{
        jogo_id:jogo_id,
        plataforma_id:plataforma_id
      },
      raw:true,
    });
   

    const media = this._calcularMediaDaAvaliacao(resposta.rows[0]);

    return {...resposta.rows[0], media:media.toFixed(2), quantidaAvaliacoes:resposta.count}

  },

  async deletarAvaliacao(id){
    const avaliacao = await Avaliacoes.findByPk(id);

    if(!avaliacao) throw new NaoEncontrado('Avaliação');

    return await Avaliacoes.destroy({
      where: {
        id: avaliacao.id
      }
    });
  },

  async cadastrarAvaliacao(dados) {
    return await Avaliacoes.create({
      audio:dados.audio,
      feedback:dados.feedback,
      cores:dados.cores,
      interface:dados.interface,
      jogo_id:dados.jogo_id,
      usuario_id:dados.usuario_id,
      plataforma_id:dados.plataforma_id,
    });
  },






}
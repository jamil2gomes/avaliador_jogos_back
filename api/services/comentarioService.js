const Comentarios = require('../models').Comentarios;
const Usuarios = require('../models').Usuarios;

module.exports = {



  async deletarComentario(jogo_id, usuario_id){
      const comentario = await Comentarios.findOne({
        where:{
          jogo_id,
          usuario_id
        },
        raw:true
      });

      if(comentario){
        return  await Comentarios.destroy({
          where:{
            id: comentario.id
          }
        })
      }
  },

  async pegarComentarioDoUsuarioSobreOJogo(jogo_id, usuario_id) {
    const comentarios = await Comentarios.findOne({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { 
        jogo_id: jogo_id,
        usuario_id:usuario_id
      },
    });

    return comentarios;
  },

  async cadastrarComentario(dadosRecebidos, jogo_id) {
    const response = await Comentarios.findOne({
      where:{
        jogo_id: jogo_id,
        usuario_id: dadosRecebidos.usuario_id
    }});

    if(response){
        return await Comentarios.update(
          { descricao: dadosRecebidos.descricao},
          {
            where:{
              jogo_id: jogo_id,
              usuario_id: dadosRecebidos.usuario_id,
              id:response.id
            }
          });
    }
    
    const comentarioCriado =  await Comentarios.create({
      descricao: dadosRecebidos.descricao,
      jogo_id: jogo_id,
      usuario_id: dadosRecebidos.usuario_id
    });

    return comentarioCriado;
  },

}
const Comentarios = require('../models').Comentarios;
const Usuarios = require('../models').Usuarios;

module.exports = {


  async pegarComentariosDadoJogo(jogo_id) {
    const comentarios = await Comentarios.findAll({
      include: {
        model: Usuarios,
        attributes: ['nickname', 'createdAt'],
        required: true
      },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      where: { jogo_id: jogo_id },
    });

    return comentarios;
  },

  async cadastrarComentario(dadosRecebidos, jogos_id) {
    return await Comentarios.create({
      descricao: dadosRecebidos.descricao,
      jogos_id: jogos_id,
      usuario_id: dadosRecebidos.usuario_id
    });
  },

}
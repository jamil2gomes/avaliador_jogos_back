const bodyParser = require('body-parser');

const genero = require('./generoRouter');
const plataforma = require('./plataformaRouter');
const jogo = require('./jogoRouter');

module.exports = app => {
  app.use(
    bodyParser.json(),
    genero,
    plataforma,
    jogo
  );
  
}
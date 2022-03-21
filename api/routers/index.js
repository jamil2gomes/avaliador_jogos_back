const bodyParser = require('body-parser');

const genero = require('./generoRouter');


module.exports = app => {
  app.use(
    bodyParser.json(),
    genero
    );
  
}
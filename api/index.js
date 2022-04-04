require('dotenv').config();
const express = require('express');
const routes = require('./routers');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
const ArgumentoInvalido = require('./erros/ArgumentoInvalido');
const estrategias  = require('./estrategias');

let app = express();

const formatosAceitos = ['application/json'];

app.use((requisicao, resposta, proximo) => {
  let formatoRequisitado = requisicao.header('Accept');

  if (formatoRequisitado === '*/*') {
      formatoRequisitado = 'application/json';
  }

  if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
      resposta.status(406);
      resposta.end();
      return;
  }

  resposta.setHeader('Content-Type', formatoRequisitado);
  proximo();
});

const corsMiddleware = function(requisicao, resposta, proximo) {
    resposta.setHeader('Access-Control-Allow-Origin', '*');
    resposta.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resposta.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, *');
    resposta.setHeader('Acess-Control-Allow-Credentials', 'false');
    resposta.setHeader('X-Powered-By', 'PHP/7.1.7');
    resposta.status(204);
    
    proximo();
}

app.use(corsMiddleware);
app.options(corsMiddleware);

routes(app);

app.use((erro, requisicao, resposta, proximo) => {
  let status = 500

  if(erro instanceof ArgumentoInvalido || erro.name === 'JsonWebTokenError'){
      status = 401;
  }

  if (erro instanceof NaoEncontrado) {
      status = 404.
  }

  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
      status = 400;
  }

  if (erro instanceof ValorNaoSuportado) {
      status = 406;
  }

  resposta.status(status)
  resposta.send(
      JSON.stringify({
          id: erro.idErro,
          name:erro.name,
          mensagem: erro.message,       
      })
  )
})

const port = process.env.PORT || 3001;


app.listen(port, ()=>{console.log(`SERVIDOR RODANDO NA PORTA ${port}`);});

module.exports = app;

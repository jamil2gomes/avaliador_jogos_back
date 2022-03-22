require('dotenv').config();
const express = require('express');
const routes = require('./routers');
const NaoEncontrado = require('./erros/NaoEncontrado');
const CampoInvalido = require('./erros/CampoInvalido');
const DadosNaoFornecidos = require('./erros/DadosNaoFornecidos');
const ValorNaoSuportado = require('./erros/ValorNaoSuportado');
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

app.use((requisicao, resposta, proximo) => {
  resposta.set('Access-Control-Allow-Origin', '*');
  proximo();
});

routes(app);

app.use((erro, requisicao, resposta, proximo) => {
  let status = 500

  if (erro instanceof NaoEncontrado) {
      status = 404
  }

  if (erro instanceof CampoInvalido || erro instanceof DadosNaoFornecidos) {
      status = 400
  }

  if (erro instanceof ValorNaoSuportado) {
      status = 406
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

app.listen(3000, ()=>{console.log('Server is runing on port 3000');});

module.exports = app;
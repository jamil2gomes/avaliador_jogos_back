const express = require('express');

let app = express();

app.use((requisicao, resposta, proximo) => {
  resposta.set('Access-Control-Allow-Origin', '*');
  proximo();
});


app.listen(3000, ()=>{console.log('Server is runing on port 3000');});

module.exports = app;
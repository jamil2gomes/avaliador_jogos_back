const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const Usuario = require('../models').Usuarios;
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const NaoEncontrado = require('../erros/NaoEncontrado');
const ArgumentoInvalido = require('../erros/ArgumentoInvalido');
const DadosNaoFornecidos = require('../erros/DadosNaoFornecidos');


function verifica(usuario){
  if(!usuario) throw new NaoEncontrado('Usuário');
}


async function verificaSenha(senhaEnviada, senhaHash){
  const senhaValida = await bcrypt.compare(senhaEnviada, senhaHash);
  if(!senhaValida) throw new ArgumentoInvalido("E-mail ou senha inválidos");
}


passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'senha',
  session: false
}, async function(email, senha, done) {
  try {
    const usuario = await Usuario.findOne({where:{email:email}});
    verifica(usuario);
    await verificaSenha(senha, usuario.senha); 

    done(null, usuario);
  } catch (error) {
    console.log(error)
    done(error);
  }
  
}
));

passport.use(new BearerStrategy(async function(token, done) {
  try {
    const payload = jwt.verify(token, process.env.CHAVE_JWT);
    const usuario = await Usuario.findOne({where:{id:payload.id}});
    done(null, usuario);
  } catch (error) {
    done(error);
  }
  
}));

module.exports = passport;
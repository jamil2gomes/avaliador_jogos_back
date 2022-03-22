const passport = require('passport');
const NaoEncontrado = require('../erros/NaoEncontrado');
const ArgumentoInvalido = require('../erros/ArgumentoInvalido');
const Usuario = require('../models').Usuarios;
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local');


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
    done(error);
  }
  
}
));

module.exports = passport;
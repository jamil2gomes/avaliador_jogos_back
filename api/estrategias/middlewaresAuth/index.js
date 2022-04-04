const passport = require('passport');


module.exports = {
    local: (requisicao, resposta, proximo) => {
        passport.authenticate(
            'local',
            { session: false },
            (erro, usuario, info) => {
                if (erro && erro.name === 'NaoEncontrado') {
                    return resposta.status(404).send(
                        JSON.stringify({
                            name:erro.name,
                            mensagem: erro.message,       
                        })
                    )
                }

                if (erro) {
                    return resposta.status(500).send(
                        JSON.stringify({
                            name:erro.name,
                            mensagem: erro.message,       
                        })
                    )
                }

                if (!usuario) {
                    return resposta.status(401).end();
                }


                requisicao.user = usuario;
                return proximo();
            })(requisicao, resposta, proximo)
    },

    bearer: (requisicao, resposta, proximo) => {
        passport.authenticate(
            'bearer',
            { session: false },
            (erro, usuario, info) => {
                if (erro && erro.name === 'JsonWebTokenError') {
                    return resposta.status(401).send(
                        JSON.stringify({
                            name:erro.name,
                            mensagem: erro.message,       
                        })
                    )
                }

                if (erro) {
                    return resposta.status(500).send(
                        JSON.stringify({
                            name:erro.name,
                            mensagem: erro.message,       
                        })
                    )
                }

                if (!usuario) {
                    return resposta.status(401).end();
                }


                requisicao.user = usuario;
                return proximo();
            })(requisicao, resposta, proximo)
    }
}
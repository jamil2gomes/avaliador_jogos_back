class ArgumentoInvalido extends Error {
  constructor (mensagem) {
      super(mensagem)
      this.name = 'Argumento Inválido'
      this.idErro = 4
  }
}

module.exports = ArgumentoInvalido;
class EmailExistente extends Error {
  constructor () {
      const mensagem = `Email já cadastrado`
      super(mensagem)
      this.name = 'EmailExistente'
      this.idErro = 5
  }
}

module.exports = EmailExistente;
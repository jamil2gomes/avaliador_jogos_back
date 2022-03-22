class DadosNaoFornecidos extends Error {
  constructor (campo) {
      super(`Não foram fornecidos dados para completar ação!\n Campo ${campo} vazio`)
      this.name = 'Dados Nao Fornecidos'
      this.idErro = 2
  }
}

module.exports = DadosNaoFornecidos;
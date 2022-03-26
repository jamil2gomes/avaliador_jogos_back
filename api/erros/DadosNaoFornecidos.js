class DadosNaoFornecidos extends Error {
  constructor (campo='') {
      if(campo!== '')
        super(`Não foram fornecidos dados para completar ação!\n Campo ${campo} vazio`)
      else
      super(`Não foram fornecidos dados para completar ação!\n`)
      this.name = 'Dados Nao Fornecidos'
      this.idErro = 2
  }
}

module.exports = DadosNaoFornecidos;
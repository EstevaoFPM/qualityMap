const pageBase = require('../steps/commands')
const pageCadastroBase = require('../steps/cadastro')
const pageLogin = require('../steps/login')

const { firstName, lastName, email, company, url, dia, mes, ano, password, mensagemSucesso } = require('../../variaveis')

after(() => {
    pageLogin.cliquelogOut()
})

context("Cadastro de Usuário com Sucesso", { testIsolation: false }, () => {
    it("Dado que acesso a página nopcommerce", () => {
        pageBase.openUrl(url)
    })
    
    it("E clico em 'Registrar' para cadastrar-me", () => {
        pageBase.clickOnElement('//div[2]/div[1]/ul/li[1]/a')
    })

    it("Quando preencho os campos com meus dados pessoais", () => {
        pageCadastroBase.genderRadioButton('male')
        pageCadastroBase.preencheDadosPessoais(firstName, lastName, dia, mes, ano, email, company)
        pageCadastroBase.preencheSenha(password)
    })

    it("E clico em Registrar", () => {
        pageCadastroBase.confirmaCadastro()
    })

    it("Então é exibida mensagem de sucesso", () => {
        pageBase.validaMensagem('//div[3]/div/div/div/div[2]/div[1]', mensagemSucesso)
    })
})
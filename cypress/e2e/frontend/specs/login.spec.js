const pageBase = require('../steps/commands')
const pageCadastroBase = require('../steps/cadastro')
const pageLogin = require('../steps/login')
const { email, password, mensagemBoasVindas } = require('../../variaveis')

before(() => {
    pageCadastroBase.cadastroUsuario(email)
})

after(() => {
    pageLogin.cliquelogOut()
})

context("Login com Sucesso", { testIsolation: false }, () => {
    it("Dado que acesso a tela de login", () => {
        pageLogin.cliqueLogIn()
    })

    it("Quando adiciono email válido", () => {
        pageLogin.preencheCampoEmail(email)
        cy.log(email)
    })

    it("E adiciono a senha correspondente", () => {
        pageLogin.preencheCampoSenha(password)
    })

    it("E clico em Login", () => {
        pageLogin.cliqueConfirmaLogin()
    })

    it("Então sou redirecionado à tela principal do usuário", () => {
        pageBase.validaMensagem('//div[3]/div/div/div/div/div[2]/div[1]/h2', mensagemBoasVindas)

    })
})
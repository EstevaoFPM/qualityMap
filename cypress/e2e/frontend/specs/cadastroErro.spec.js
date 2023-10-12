const pageBase = require('../steps/commands')
const pageCadastroBase = require('../steps/cadastro')
const { url, mensagemLabel_1, mensagemLabel_2, mensagemLabel_3, mensagemLabel_4 } = require('../../variaveis')

context("Cadastro de Usuário", { testIsolation: false }, () => {
    it("Dado que acesso a página nopcommerce", () => {
        pageBase.openUrl(url)
    })
    
    it("E clico em 'Registrar' para cadastrar-me", () => {
        pageBase.clickOnElement('//div[2]/div[1]/ul/li[1]/a')
    })

    it("Quando não preencho nenhum campo obrigatório", () => {
    })

    it("E clico em Registrar", () => {
        pageCadastroBase.confirmaCadastro()
    })

    it("Então é exibida mensagem abaixo de cada label", () => {
        pageBase.validaMensagem('//div[1]/div[2]/div[2]/span[2]/span', mensagemLabel_1)
        pageBase.validaMensagem('//div[1]/div[2]/div[3]/span[2]/span', mensagemLabel_2)
        pageBase.validaMensagem('//div[1]/div[2]/div[5]/span[2]/span', mensagemLabel_3)
        pageBase.validaMensagem('//*[@id="Password-error"]', mensagemLabel_4)
        pageBase.validaMensagem('//*[@id="ConfirmPassword-error"]', mensagemLabel_4)
    })
})
const pageBase = require('./commands')
const { email, password } = require('../../variaveis');

module.exports = {

    cliqueLogIn() {
        pageBase.clickOnElement('//div[2]/div[1]/ul/li[2]/a');
    },

    preencheCampoEmail(email) {
        pageBase.type('//*[@id="Email"]', email);
    },

    preencheCampoSenha(password) {
        pageBase.type('//*[@id="Password"]', password);
    },

    cliqueConfirmaLogin(password) {
        pageBase.clickOnElement('//form/div[3]/button');
    },

    cliquelogOut() {
        pageBase.clickOnElement('//div[2]/div[1]/ul/li[2]/a')
    },

    login() {
        this.cliqueLogIn(),
        this.preencheCampoEmail(email),
        this.preencheCampoSenha(password),
        this.cliqueConfirmaLogin()
    }
}
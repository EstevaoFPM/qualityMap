const pageBase = require('./commands')
import { company, dia, firstName, lastName, password, url, mes, ano } from '../../variaveis'

module.exports = {

    genderRadioButton(gender) {
        pageBase.clickOnElement(`//*[@id="gender-${gender}"]`)
    },
	
	preencheDadosPessoais(firstName, lastName, dia, mes, ano, email, company) {
		pageBase.type('//*[@id="FirstName"]', firstName)
		pageBase.validaValor('//*[@id="FirstName"]', firstName)

		pageBase.type('//*[@id="LastName"]', lastName)
		pageBase.validaValor('//*[@id="LastName"]', lastName)

		pageBase.selectCombo('//div[4]/div/select[1]', dia)
		pageBase.validaValor('//div[4]/div/select[1]', dia)

		pageBase.selectCombo('//div[4]/div/select[2]', mes)
		pageBase.validaValor('//div[4]/div/select[2]', '4')

		pageBase.selectCombo('//div[4]/div/select[3]', ano)
		pageBase.validaValor('//div[4]/div/select[3]', ano)

		pageBase.type('//*[@id="Email"]', email)
		pageBase.validaValor('//*[@id="Email"]', email)

		pageBase.type('//*[@id="Company"]', company)
		pageBase.validaValor('//*[@id="Company"]', company)

    },

	preencheSenha(password) {
		pageBase.type('//*[@id="Password"]', password)
		pageBase.validaValor('//*[@id="Password"]', password)

		pageBase.type('//*[@id="ConfirmPassword"]', password)
		pageBase.validaValor('//*[@id="ConfirmPassword"]', password)
	},

	confirmaCadastro() {
		pageBase.clickOnElement('//*[@id="register-button"]')
	},

	cadastroUsuario(email) {
		pageBase.openUrl(url)
		pageBase.clickOnElement('//div[2]/div[1]/ul/li[1]/a')
		this.genderRadioButton('male')
		this.preencheDadosPessoais(firstName, lastName, dia, mes, ano, email, company)
		this.preencheSenha(password)
		this.confirmaCadastro()
	}
}

const Chance = require('chance');
const chance = new Chance();

//** GERAL */

export const company = chance.company()
export const password = 'Test123'
export const email = chance.email({ domain: 'qualitymap.io'})
export const firstName = chance.first();
export const lastName = chance.last();
export const dia = '11'
export const mes = 'April'
export const ano = '1990'


//**FRONTEND */

//URL
export const url = 'https://demo.nopcommerce.com/'

//Mensagens Frontend

export const mensagemSucesso = 'Your registration completed'
export const mensagemBoasVindas = 'Welcome to our store'
export const mensagemLabel_1 = 'First name is required.'
export const mensagemLabel_2 = 'Last name is required.'
export const mensagemLabel_3 = 'Email is required.'
export const mensagemLabel_4 = 'Password is required.'


//**BACKEND */

//URL
export const urlServeRest = 'https://serverest.dev'


//Mensagens Backend
export const mensagemSucessoCadastroBack = 'Cadastro realizado com sucesso'
export const mensagemSucessoAlteracaoBack = 'Registro alterado com sucesso'
export const mensagemSucessoExclusaoBack = 'Registro excluído com sucesso'
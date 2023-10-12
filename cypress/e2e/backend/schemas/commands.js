import { autenticacaoUsuario } from './login'

// var id;

import { email, password, url, urlServeRest } from "../../variaveis";


Cypress.Commands.add('autenticacaoUsuario', () => {

    cy.request({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        url: `${urlServeRest}/login`,
        body: autenticacaoUsuario(email, password)
    }).then(res => {
        expect(res.status).to.equal(200);
    })
})

Cypress.Commands.add('req', (method, url, body, headers = {}) => {
    cy.autenticacaoUsuario();

    const token = Cypress.env('authorization');

    headers = {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'authorization': token
    }
    cy.request({
        method,
        url,
        body,
        headers,
        failOnStatusCode: true
    })
})

// // Cypress.Commands.add('exclusaoUsuario', () => {
// //     cy.request({
// //         method: 'DELETE',
// //         headers: {
// //             'Content-Type': 'application/json',
// //             'accept': 'application/json'
// //         },
// //         url: `${urlServeRest}/usuarios/${id}`
// //     }).then(res => {
// //         expect(res.status).to.equal(200);
// //     })
// // })

// module.exports = {

//     openUrl(url) {
//         cy.visit(url);
//     },

//     clickOnElement(xpath) {
//         cy.xpath(xpath).click();
//     },

//     selectCombo(xpath, element) {
//         cy.xpath(xpath).select(element)
//     },

//     type(element, valueToType) {
//         cy.xpath(element).type(valueToType);
//     },

//     getWebElementFromXpath(xpath) {
//         return cy.xpath(xpath)
//     },

//     validaMensagem(xpath, mensagem) {
//         cy.xpath(xpath)
//             .should('have.text', mensagem)
//     }
// }
require('cypress-xpath')

module.exports = {

    openUrl(url) {
        cy.visit(url);
    },

    clickOnElement(xpath) {
        cy.xpath(xpath).click();
    },

    selectCombo(xpath, element) {
        cy.xpath(xpath).select(element)
    },

    type(element, valueToType) {
        cy.xpath(element).type(valueToType);
    },

    validaMensagem(xpath, mensagem) {
        cy.xpath(xpath)
            .should('have.text', mensagem)
    },

    validaValor(xpath, texto) {
        cy.xpath(xpath)
            .should('have.value', texto)
    }
}
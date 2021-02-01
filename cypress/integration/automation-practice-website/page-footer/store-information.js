import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test Store information on main page", function() {
    const homepage_PO = new HomePage_PO()

    beforeEach(function() {
        homepage_PO.visitHomepage()
    })

    it("Check Store information column", function() {
        cy.get('#block_contact_infos').contains('Store information').should('have.text', 'Store information')
    })

    it("Check store location", function() {
        cy.get('#block_contact_infos').contains('North Carolina')
    })

    it("Check phone number", function() {
        cy.get('.icon-phone').parent().contains('(347) 466-7432')
    })

    it("Check Email", function() {
        cy.get('a[href*=mailto]').contains('support@seleniumframework.com')
    })

    it.only("Click on copyright should redirect the user to the www.PrestaShop.com", function() {
        cy.contains('Ecommerce software by PrestaShop™').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'www.prestashop.com')
    })
})
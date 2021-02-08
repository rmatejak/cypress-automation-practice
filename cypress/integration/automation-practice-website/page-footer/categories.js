import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test categories in footer", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check categories column", function () {
        cy.contains('Categories').should('have.text', 'Categories')
    })

    it("Click on Women should redirect the user to the category of women", function () {
        cy.get('a[href*=category]').contains('Women').click()
        cy.url().should('include', 'id_category=3')
    })
}) 
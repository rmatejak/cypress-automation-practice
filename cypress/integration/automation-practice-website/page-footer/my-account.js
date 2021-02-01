import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test My account in footer", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check My account column", function () {
        cy.get('a[href*=my-account]').contains('My account').should('have.text', 'My account')
    })

    it("Click on My ordes should redirect the ser to the order history", function() {
        cy.get("a[href*=history]").contains('My orders').click()
        cy.url().should('include', 'history')
    })

    it("Click on My credit slips should redirect the user to the order slip", function() {
        cy.get('a[href*=order-slip]').contains('My credit slips').click()
        cy.url().should('include', 'order-slip')
    })

    it("Click on My addresses should redirect the user to user addresses", function() {
        cy.get('a[href*=addresses]').contains('My addresses').click()
        cy.url().should('include', 'addresses')
    })

    it("Click on My personal info should redirect the user to the user identity", function() {
        cy.get('a[href*=identity]').contains('My personal info').click()
        cy.url().should('include', 'identity')
    })

    // Works only if the user is logged in
    // it('Click on Sign out should logout user from website', function() {
    //     cy.get('li > a[herf*=mylogout]').contains('Sign out').click()
    // })
})
import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test My account in footer", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check My account column", () => {
        homepage_PO.checkMyAccountHeader().should('have.text', 'My account')
    })

    it("Click on My ordes should redirect the ser to the order history", () => {
        homepage_PO.myOrdersButton().click()
        cy.url().should('include', 'history')
    })

    it("Click on My credit slips should redirect the user to the order slip", () => {
        homepage_PO.myCreditSlipsButton().click()
        cy.url().should('include', 'order-slip')
    })

    it("Click on My addresses should redirect the user to user addresses", () => {
        homepage_PO.myAddressesButton().click()
        cy.url().should('include', 'addresses')
    })

    it("Click on My personal info should redirect the user to the user identity", () => {
        homepage_PO.myPersonalInfo().click()
        cy.url().should('include', 'identity')
    })

    // Works only if the user is logged in
    // it('Click on Sign out should logout user from website', () => {
    //     homepage_PO.signOutFooterButton().click()
    // })
})
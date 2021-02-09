import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test Store information on main page", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()

        cy.fixture('storeInformation').then((storeInformation) => {
            globalThis.storeInformation = storeInformation
        })
    })

    it("Check Store information column", () => {
        homepage_PO.checkStoreInformationHeader().should('have.text', 'Store information')
    })

    it.only("Check store location", () => {
        homepage_PO.checkStoreLocation().contains(globalThis.storeInformation.location)
    })

    it("Check phone number", () => {
        homepage_PO.checkPhoneNumber().contains(globalThis.storeInformation.phone_number)
    })

    it("Check support Email", () => {
        homepage_PO.checkSupportEmail().contains(globalThis.storeInformation.support_email)
    })

    it("Click on copyright should redirect the user to the www.PrestaShop.com", () => {
        homepage_PO.copyrightButton().click()
        cy.url().should('include', 'www.prestashop.com')
    })
})
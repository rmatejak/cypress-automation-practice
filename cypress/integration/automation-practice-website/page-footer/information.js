import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test information in footer", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check information column", () => {
        homepage_PO.checkInformationHeader().should('have.text', 'Information')
    })

    it("Click on Specials should redirect the user to items on promotion", () => {
        homepage_PO.specialsButton().click()
        cy.url().should('include', 'prices-drop')
    })

    it("Click on New Products should redirect the user to the new products", () => {
        homepage_PO.newProductsButton().click()
        cy.url().should('include', 'new-products')
    })

    it("Click on Best sellers should redirect the user to the best-selling items", () => {
        homepage_PO.bestSellersButton().click()
        cy.url().should('include', 'best-sales')
    })

    it("Click on Our stores should redirect the user to the map with stores", () => {
        homepage_PO.ourStoresButton().click()
        cy.url().should('include', 'stores')
    })

    it("Click on Contact us should redirect the user to the customer service - contact us", () => {
        homepage_PO.contactUsButton().click()
        cy.url().should('include', 'contact')
    })

    it("Click on Terms and conditions of use should redirect the user to the regulations", () => {
        homepage_PO.termsAndConditionsOfUseButton().click()
        cy.url().should('include', 'cms')
    })

    it("Click on Abous us should redirect the user to the information about company", () => {
        homepage_PO.aboutUsButton().click()
        cy.url().should('include', 'id_cms=4&controller=cms')
    })

    it("Click on Sitemap should redirect the user to the page layout", () => {
        homepage_PO.sitemapButton().click()
        cy.url().should('include', 'sitemap')
    })
}) 
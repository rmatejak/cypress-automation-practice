import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test information in footer", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check information column", function () {
        cy.get('#block_various_links_footer').contains('Information').should('have.text', 'Information')
    })

    it("Click on Specials should redirect the user to items on promotion", function () {
        cy.get('a[href*=prices-drop]').contains('Specials').click()
        cy.url().should('include', 'prices-drop')
    })

    it("Click on New Products should redirect the user to the new products", function () {
        cy.get('a[href*=new-products]').contains('New products').click()
        cy.url().should('include', 'new-products')
    })

    it("Click on Best sellers should redirect the user to the best-selling items", function () {
        cy.get('a[href*=best-sales]').contains('Best sellers').click()
        cy.url().should('include', 'best-sales')
    })

    it("Click on Our stores should redirect the user to the map with stores", function () {
        cy.get('a[href*=stores]').contains('Our stores').click()
        cy.url().should('include', 'stores')
    })

    it("Click on Contact us should redirect the user to the customer service - contact us", function () {
        cy.get('a[href*=contact]').contains('Contact us').click()
        cy.url().should('include', 'contact')
    })

    it("Click on Terms and conditions of use should redirect the user to the regulations", function () {
        cy.get('a[title="Terms and conditions of use"]').click()
        cy.url().should('include', 'cms')
    })

    it("Click on Abous us should redirect the user to the information about company", function () {
        cy.contains('About us').click()
        cy.url().should('include', 'id_cms=4&controller=cms')
    })

    it("Click on Siremap should redirect the user to the page layout", function () {
        cy.get('a[href*=sitemap]').contains('Sitemap').click()
        cy.url().should('include', 'sitemap')
    })
}) 
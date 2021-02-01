import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test socials on main page", function() {
    const homepage_PO = new HomePage_PO()

    beforeEach(function() {
        homepage_PO.visitHomepage()
    })

    it("Check socials on main page", function() {
        cy.get('#social_block').contains('Follow us')
    })

    it("Check out icons of social networks", function() {
        cy.get('#social_block > ul :nth-child(1)').contains('Facebook')
        cy.get('#social_block > ul :nth-child(2)').contains('Twitter')
        cy.get('#social_block > ul :nth-child(3)').contains('Youtube')
        cy.get('#social_block > ul :nth-child(4)').contains('Google Plus')
    })

    it("Check redirect to facebook", function() {
        cy.get('.facebook > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'facebook.com')
    })

    it("Check redirect to Twitter", function() {
        cy.get('.twitter > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'twitter.com')
    })

    it("Check redirect to Youtube", function() {
        cy.get('.youtube > a').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'youtube.com')
    })

    // Google plus is unavailable
    // it("Check redirect to Google Plus", function() {
    //     cy.get('.google-plus > a').invoke('removeAttr', 'target').click()
    //     cy.url().should('include', 'plus.google.com')
    //})
})
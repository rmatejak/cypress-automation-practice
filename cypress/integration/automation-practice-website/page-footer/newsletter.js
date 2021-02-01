import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test newsletter", function () {
    const homepage_PO = new HomePage_PO()

    let email = '' 
        
    beforeEach(function () {
        cy.clearCookies()
        cy.clearLocalStorage()

        homepage_PO.visitHomepage()
    })

    it('Test main icon of newsletter', function () {
        cy.get('#newsletter_block_left').contains('Newsletter')
    })

    it('Check the succesfully subscription to the newsletter',function () {
        email = homepage_PO.generateEmail()
        cy.log(email)

        cy.get('#newsletter-input').type(email).then(() => {
            cy.get('button[name=submitNewsletter]').click()
        }).then(() => {
            cy.get('.alert').contains(' Newsletter : You have successfully subscribed to this newsletter.')
        })
    })

    it('Check the unsuccessful subscription on the email used',function () {
        email = homepage_PO.generateEmail()
        cy.log(email)

        cy.get('#newsletter-input').type(email).then(() => {
            cy.get('button[name=submitNewsletter]').click().then(() => {
                cy.get('.alert').contains(' Newsletter : You have successfully subscribed to this newsletter.')
                cy.get('#newsletter-input').type(email).then(() => {
                    cy.get('button[name=submitNewsletter]').click()
                })
            })
        }).then(() => {
            cy.get('.alert').contains(' Newsletter : This email address is already registered.')
        })
    })

    it("Check invalid email", function() {
        cy.get('#newsletter-input').type('123qwe').then(() => {
            cy.get('button[name=submitNewsletter]').click()
        }).then(() => {
            cy.get('.alert').contains(' Newsletter : Invalid email address.')
        })
    })
})
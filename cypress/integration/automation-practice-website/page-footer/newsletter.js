import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test newsletter", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        cy.fixture('alertMessages').then((data) => {
            globalThis.data = data
        })

        cy.fixture('incorrectEmails').then((emails) => {
            globalThis.emails = emails
        })

        cy.clearCookies()
        cy.clearLocalStorage()
        homepage_PO.visitHomepage()
    })

    it('Test main icon of newsletter', () => {
        cy.get('#newsletter_block_left').contains('Newsletter')
    })

    it('Check the succesfully subscription to the newsletter', () => {
        const email = homepage_PO.generateEmail()
        cy.log(email)
        homepage_PO.newsletterInput().type(email)
        homepage_PO.submitNewsletter().click()
        homepage_PO.alert().contains(globalThis.data.success_message)
    })

    it('Check the unsuccessful subscription on the email used', () => {
        const email = homepage_PO.generateEmail()
        cy.log(email)
        homepage_PO.newsletterInput().type(email)
        homepage_PO.submitNewsletter().click()
        homepage_PO.alert().contains(globalThis.data.success_message)
        homepage_PO.newsletterInput().type(email)
        homepage_PO.submitNewsletter().click()
        homepage_PO.alert().contains(globalThis.data.used_email_message)
    })

    it("Check invalid email", () => {
        homepage_PO.checkIncorrectEmails(globalThis.emails)
    })

    it('Check the unsuccessful subscription on the email used', () => {
        const email = homepage_PO.generateEmail()
        cy.log(email)
        homepage_PO.newsletterInput().type(email)
        homepage_PO.submitNewsletter().click()
        homepage_PO.alert().contains(globalThis.data.success_message)
        homepage_PO.newsletterInput().type(email)
        homepage_PO.submitNewsletter().click()
        homepage_PO.alert().contains(globalThis.data.used_email_message)
    })
})
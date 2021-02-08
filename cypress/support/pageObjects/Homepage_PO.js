class HomePage_PO {

    visitHomepage() {
        return cy.visit(Cypress.env("automation_practice_homepage"), { timeout: 60000 })
    }

    generateEmail() {
        return `test_${Math.random().toString(36).substr(2, 10)}@gmail.com`
    }

    newsletterInput() {
        return cy.get('#newsletter-input')
    }

    submitNewsletter() {
        return cy.get('button[name=submitNewsletter]')
    }

    alert() {
        return cy.get('.alert')
    }

    checkIncorrectEmails($incorrectEmail) {
        $incorrectEmail.incorrectEmail.forEach(function ($element) {
            cy.get('#newsletter-input').type($element)
            cy.get('button[name=submitNewsletter]').click()
            cy.get('.alert').contains(' Newsletter : Invalid email address.')
        })
    }
}
export default HomePage_PO
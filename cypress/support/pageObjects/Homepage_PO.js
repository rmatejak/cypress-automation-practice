class HomePage_PO {



    visitHomepage() {
        cy.visit(Cypress.env("automation_practice_homepage"), { timeout: 60000 })
    }

    generateEmail() {
        let email = "test_" + Math.random().toString(36).substr(2, 10) + "@gmail.com"
        return email
    }
}
export default HomePage_PO
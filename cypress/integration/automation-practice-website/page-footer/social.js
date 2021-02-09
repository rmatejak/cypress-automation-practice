import HomePage_PO from '../../../support/pageObjects/Homepage_PO'

describe("Test socials on main page", function () {
    const homepage_PO = new HomePage_PO()

    beforeEach(function () {
        homepage_PO.visitHomepage()
    })

    it("Check socials on main page", () => {
        homepage_PO.checkSocialsHeader().contains('Follow us')
    })

    it("Check out icons of social networks", () => {
        homepage_PO.checkFacebookIcon()
        homepage_PO.checkTwitterIcon()
        homepage_PO.checkYoutubeIcon()
        homepage_PO.checkGooglePlusIcon()
    })

    it("Check redirect to facebook", () => {
        homepage_PO.redirectToFacebook()
        cy.url().should('include', 'facebook.com')
    })

    it("Check redirect to Twitter", () => {
        homepage_PO.redirectToTwitter()
        cy.url().should('include', 'twitter.com')
    })

    it("Check redirect to Youtube", () => {
        homepage_PO.redirectToYoutube()
        cy.url().should('include', 'youtube.com')
    })

    // Google plus is unavailable
    // it("Check redirect to Google Plus", function() {
    //     homepage_PO.redirectToGooglePlus()
    //     cy.url().should('include', 'plus.google.com')
    //})
})
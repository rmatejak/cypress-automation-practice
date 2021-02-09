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

    checkFacebookIcon() {
        return cy.get('#social_block > ul :nth-child(1)')
    }

    checkTwitterIcon() {
        return cy.get('#social_block > ul :nth-child(2)')
    }

    checkYoutubeIcon() {
        return cy.get('#social_block > ul :nth-child(3)')
    }

    checkGooglePlusIcon() {
        return cy.get('#social_block > ul :nth-child(4)')
    }

    redirectToFacebook() {
        return cy.get('.facebook > a').invoke('removeAttr', 'target').click()
    }

    redirectToTwitter() {
        return cy.get('.twitter > a').invoke('removeAttr', 'target').click()
    }

    redirectToYoutube() {
        return cy.get('.youtube > a').invoke('removeAttr', 'target').click()
    }

    redirectToGooglePlus() {
        return cy.get('.google-plus > a').invoke('removeAttr', 'target').click()
    }

    checkSocialsHeader() {
        return cy.get('#social_block')
    }

    checkMyAccountHeader() {
        return cy.get('a[href*=my-account]').contains('My account')
    }

    checkInformationHeader() {
        return cy.get('#block_various_links_footer').contains('Information')
    }

    checkCategoriesHeader() {
        return cy.contains('Categories').contains('Categories')
    }

    checkStoreInformationHeader() {
        return cy.get('#block_contact_infos').contains('Store information')
    }

    womenButton() {
        return cy.get('a[href*=category]').contains('Women')
    }

    specialsButton() {
        return cy.get('a[href*=prices-drop]').contains('Specials')
    }

    newProductsButton() {
        return cy.get('a[href*=new-products]').contains('New products')
    }

    bestSellersButton() {
        return cy.get('a[href*=best-sales]').contains('Best sellers')
    }

    ourStoresButton() {
        return cy.get('a[href*=stores]').contains('Our stores')
    }

    contactUsButton() {
        return cy.get('a[href*=contact]').contains('Contact us')
    }

    termsAndConditionsOfUseButton() {
        return cy.get('a[title="Terms and conditions of use"]')
    }

    aboutUsButton() {
        return cy.contains('About us')
    }

    sitemapButton() {
        return cy.get('a[href*=sitemap]').contains('Sitemap')
    }

    myOrdersButton() {
        return cy.get("a[href*=history]").contains('My orders')
    }

    myCreditSlipsButton() {
        return cy.get('a[href*=order-slip]').contains('My credit slips')
    }

    myAddressesButton() {
        return cy.get('a[href*=addresses]').contains('My addresses')
    }

    myPersonalInfo() {
        return cy.get('a[href*=identity]').contains('My personal info')
    }

    signOutFooterButton() {
        return cy.get('li > a[herf*=mylogout]').contains('Sign out')
    }

    checkStoreLocation() {
        return cy.get('#block_contact_infos')
    }

    checkPhoneNumber() {
        return cy.get('.icon-phone').parent()
    }

    checkSupportEmail() {
        return cy.get('a[href*=mailto]')
    }

    copyrightButton() {
        return cy.contains('Ecommerce software by PrestaShop™').invoke('removeAttr', 'target')
    }
}
export default HomePage_PO
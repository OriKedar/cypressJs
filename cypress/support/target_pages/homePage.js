/// <reference types="cypress" />


class HomePage {
    async visit() {
        await cy.visit('https://www.target.com/')
        .intercept('https://redoak.target.com/*', req => req.destroy())
    
    }

    async openSingIn() {
        Cypress.log('Starting Login');
        await cy.get('[data-test="@web/AccountLink"]').click();
        await cy.log('account link is open');
        await cy.get('[class="ReactModal__Overlay ReactModal__Overlay--after-open][data-test="@web/OverlayModal"]');
        await cy.get('[data-test="accountNav-signIn"]').click();
        await cy.visit('https://www.target.com/login')
        await cy.url().should('contain', '/login');
    }

}
export default HomePage
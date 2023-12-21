/// <reference types="cypress" />


class HomePage {
    async visit() {
        await cy.visit('https://www.target.com/')
        .intercept('https://redoak.target.com/*', req => req.destroy())
    
    }

    async openSingIn() {
        await cy.get('[data-test="@web/AccountLink"]').click();
        //not working, need to be fix
        await cy.get('[data-test="accountNav-signIn"]').click();

        await cy.url().should('contain', '/login');
    }

}
export default HomePage
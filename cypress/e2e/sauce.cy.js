/// <reference types="cypress" />
import LoginPage from "../support/sauce_pages/loginPage"


const loginPage = new LoginPage();

describe('sauce login tests suite', () => {

    beforeEach(() => {
        cy.clearCookies();
        loginPage.visit();
        cy.get('[id="login_button_container"]').should('be.visible');
    })


    it('open and login - happy flow', () => {
        loginPage.fillUserName(env.happyFlowUsername);
        loginPage.fillPassword(env.userPassword);
        loginPage.submitLogin();
        cy.url().should('contain', 'inventory');
    })

    it('open and login - blocked user', () => {
        loginPage.fillUserName(env.lockedUsername);
        loginPage.fillPassword(env.userPassword);
        loginPage.submitLogin();
        cy.get('[data-test="error"]').should('be.visible');
        cy.get('[data-test="error"]').should('include.text', 'locked out');
        
    })
})
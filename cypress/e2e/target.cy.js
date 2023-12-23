/// <reference types="cypress" />
import HomePage from "../support/target_pages/homePage";
import LoginPage from "../support/target_pages/loginPage";

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Target.com sanity', () => {

    it('Open and login', async () => {
        await homePage.visit();
        await cy.get('[data-test="@web/HeaderPrimaryNav"]').should('be.visible');
        await homePage.openSingIn()
    });

    it('Should sucsses login', async (userName = env.targetUsername , password = env.targetPassword) => {
        await loginPage.visit();
        await loginPage.fillEmail(userName);
        await loginPage.fillPassword(password);
        await loginPage.tryLogin();
        await cy.url().should('eq', 'https://target.com');
        await cy.get('[data-test="@web/HeaderPrimaryNav"]');
    });
})
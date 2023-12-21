/// <reference types="cypress" />
import HomePage from "../support/target_pages/homePage";

const homePage = new HomePage();

describe('Target.com sanity', () => {

    it('Open and login', async () => {
        await homePage.visit();
        // await cy.get('data-test="@web/HeaderPrimaryNav"').should('be.visible');
        await homePage.openSingIn()
    });
})
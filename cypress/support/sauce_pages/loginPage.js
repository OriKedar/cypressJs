/// <reference types="cypress" />


class LoginPage {
    visit(){
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: false})
        .intercept('https://events.backtrace.io/*', req => req.destroy())
    }
    
    fillUserName(userName){
        cy.get("[id='user-name']").type(userName);
    }

    fillPassword(password){
        cy.get('[id="password"]').type(password)
    }

    submitLogin(){
        cy.get('[id="login-button"]').click();
    }

}
export default LoginPage
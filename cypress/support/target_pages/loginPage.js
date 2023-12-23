/// <reference types="cypress" />

class LoginPage {
    async visit(){
        await cy.visit('https://www.target.com/login');
    }

    async fillEmail(userEmail){
        await cy.get('[name="username"]').type(userEmail);
        
    }
    async fillPassword(userPassword){
        await cy.get('[name="password"]').type(userPassword)
    }
    
    async tryLogin(){
        await cy.get('[id="login"]').click();
    }

}
export default LoginPage
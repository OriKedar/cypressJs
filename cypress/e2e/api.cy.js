/// <reference types="cypress" />

context('API test examples', () => {

    it('Shold test something', async () => {
        console.log("api requestes")
        cy.request('GET', '/api/users').should((response) => {
            expect(response.status).to.eq(200);
        })
    });

    it('Shold create new user', async () => {
        cy.request('POST', '/api/users', {name: 'Ofer Dvir', job: 'moderator'}).should((response) => {
            cy.log('login sucsses')
            expect(response.status).to.eq(200)
        })
    })
});
/// <reference types="cypress" />


context('Calculator test file', () => {
    afterEach(() => {
        cy.wait(20)
    })

    it('Should open calculator home page', async () => {
        await cy.visit('https://web2.0calc.com/')
    })

    it('Should open history tray', () => {
        cy.get('[type="button"][class="btn dropdown-toggle pull-right"]').click({force: true})
        cy.get('[id="clearhistory"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('clear history?')
        })
    });

    it('Should calculate 1+1 = 2', () => {
        cy.genericCalculation(["1+1", "=", "2"])
    })

    it('Should calculate 2+2 = 4', () => {
        cy.genericCalculation(['2+2', '=', '4'])
    })

    it('Should calculate (14 - 2) * 2 != 20', () => {
        cy.genericCalculation(['(14 - 2) * 2', '!=', '20'])
    })

    it('Should calculate sin(30) = 0.5', () => {
        cy.genericCalculation(['sin(30)', '=', '0.5'])
    });

    it('Should test history', () => {
        cy.get('[id="histframe"]').find('li').should('have.length', '4')
    })
});
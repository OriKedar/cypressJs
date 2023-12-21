/// <reference types="cypress" />


context('Calculator test file', () => {
    afterEach(() => {
        cy.wait(20)
    })

    it('Should open calculator home page', async () => {
        await cy.visit('https://web2.0calc.com/');
        cy.get('[type="button"][class="btn dropdown-toggle pull-right"]').click({force: true})
        cy.get('[id="clearhistory"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('clear history?')
        })
        cy.genericCalculation(["4+1", "=", "5"])
        cy.genericCalculation(['12-6', '=', '6'])
        cy.genericCalculation(['(14 - 2) * 2', '!=', '20'])
        cy.genericCalculation(['sin(30)', '=', '0.5'])

        cy.get('[id="histframe"]').find('li').should('have.length', '4')
    });

    it('Should open Google', () => {
        cy.visit('https://www.google.com/');
        cy.screenshot('Google', { capture: 'fullPage'});


    })

    // it('Should open history tray', () => {
    //     cy.get('[type="button"][class="btn dropdown-toggle pull-right"]').click({force: true})
    //     cy.get('[id="clearhistory"]').click()
    //     cy.on('window:confirm', (str) => {
    //         expect(str).to.eq('clear history?')
    //     })
    // });

    // it('Should calculate 4+1 = 5', () => {
    //     cy.genericCalculation(["4+1", "=", "5"])
    // })

    // it('Should calculate 12 - 6 = 6', () => {
    //     cy.genericCalculation(['12-6', '=', '6'])
    // })

    // it('Should calculate (14 - 2) * 2 != 20', () => {
    //     cy.genericCalculation(['(14 - 2) * 2', '!=', '20'])
    // })

    // it('Should calculate sin(30) = 0.5', () => {
    //     cy.genericCalculation(['sin(30)', '=', '0.5'])
    // });

    // it('Should test history', () => {
    //     cy.get('[id="histframe"]').find('li').should('have.length', '4')
    // })
});
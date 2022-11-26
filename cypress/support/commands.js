
Cypress.Commands.add('calculate', (methStatement) => {
    cy.get('[id=input]').type(methStatement, {delay: 30});
    cy.get('[id="BtnCalc"]').click()
});

Cypress.Commands.add('genericCalculation', (statement) => {
    let [equation, conditionOfEq, equationResult] = statement
    cy.intercept('/calc').as('calc')
    cy.calculate(equation).then(() => {
            cy.wait('@calc').its("response").should((response) => {
                const responseFromCalc = response.body.results[0].out;
                expect(response.statusCode).to.eq(200)
                if (conditionOfEq !== '=') {
                    expect(responseFromCalc).to.not.eq(equationResult)
                }
                else {
                    expect(responseFromCalc).to.eq(equationResult)
                }
            })
    })
    cy.clearScreen()
});

Cypress.Commands.add('clearScreen', () => {
   cy.get('[id="BtnClear"]').click({force: true});
   cy.get('[id="result"]').should('not.be.visible')
})

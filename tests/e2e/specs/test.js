// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })


it('Should update the display at the running total when number buttons pressed', () => {
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('#number2').click();
  cy.get('#number0').click();
  cy.get('.display').should('contain', '2020');
});

it('should show 10 in the running total when pressing 5 + 5 then =', () => {
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number5').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '10');
})
it('should show 0 in the running total when pressing 10 - 10 then =', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_subtract').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '0');
})
it('should show 1 in the running total when pressing 4 / 4 then =', () => {
  cy.get('#number4').click();
  cy.get('#operator_divide').click();
  cy.get('#number4').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '1');
})
it('should show 100 in the running total when pressing 10 * 10 then =', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_multiply').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '100');
})
it('should show 4 in the running total after multiple operations are chained together', () => {
  cy.get('#number5').click();
  cy.get('#operator_multiply').click();
  cy.get('#number5').click();
  cy.get('#operator_add').click();
  cy.get('#number1').click();
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number4').click();
  cy.get('#operator_subtract').click();
  cy.get('#number5').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '5');
})
it('should show positive 5 as 5', () => {
  cy.get('#number5').click();
  cy.get('.display').should('contain', '5')
})
it('should show negative 5 as -5', () => {
  cy.get('#number5').click();
  cy.get('#operator_subtract').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '-5');
})
it('should show 2 and a half as 2.5', () => {
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number2').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '2.5');
})
it('should show 100 Billion multiplied by 100 Billion as 1e+22', () => {
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator_multiply').click();
  cy.get('#number1').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', '1e+22');
})
it('should show error if dividing by 0', () => {
  cy.get('#number5').click();
  cy.get('#operator_divide').click();
  cy.get('#number0').click();
  cy.get('#operator_equals').click();
  cy.get('.display').should('contain', 'error');
})
})
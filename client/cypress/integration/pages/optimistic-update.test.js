/// <reference types="cypress"/>

describe('<OptimizationUpdate/>', () => {
  before(() => {
    cy.visit(`${Cypress.env('baseUrl')}${Cypress.env('optimisticUpdate')}`);
  });

  it('should confirm that 1 greater than 0', () => {
    expect(1 > 0).to.be.true;
  });
});

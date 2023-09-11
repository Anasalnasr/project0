/// <reference types= "cypress" />


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://global.almosafer.com/ar')
    cy.get('.cta__saudi').click();
    cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').should('include', 'English')
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('contain', 'SAR')
    cy.get('#uncontrolled-tab-example-tab-flights')
    .should('have.class', 'nav-item nav-link active');
  
  })
})

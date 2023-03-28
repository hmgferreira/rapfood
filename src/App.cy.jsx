import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    // cy.intercept('GET', '/users').as('new-user')
    cy.mount(<App />);
    cy.get("[id='btn-menu']").click();
    cy.contains("Produtos").click();

    cy.get("[id='email']").type("teste@teste.com.br");
    cy.wait(500);
    cy.get("[id='password']").type("12345");
    cy.wait(500);
    cy.get("[type='button']").click();
  })
})
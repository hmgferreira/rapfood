import React from 'react'
import Login from './index'

describe('<Login />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Login />);
    cy.get("[id='email']").type("teste@teste.com.br");
    cy.wait(2000);
    cy.get("[id='password']").type("123456");
    cy.wait(2000);
    cy.get("[type='button']").click();
  })
})
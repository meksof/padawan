// https://docs.cypress.io/api/introduction/api.html

describe('Recherche', () => {
  it('From given keyword, should get effective results', () => {
    cy.visit('http://localhost:8080/search')
    cy.get('#search-input').focus().type('valeur')
    cy.wait(250)
    cy.get('#search-btn').click().then(() => {
      cy.get('.sales').find('.card').its('length').should('be.gte', 1)
      cy.get('.items').find('.card').its('length').should('be.gte', 1)
    })
  })
})

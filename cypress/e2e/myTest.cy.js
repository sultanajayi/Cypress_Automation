
describe('My First Test', () => {
  it('Verify title-positive', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM')
  })

  it('Verify title-negative', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq','OrangeHRM12344')
  })

})
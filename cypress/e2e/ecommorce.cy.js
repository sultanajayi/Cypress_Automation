Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

describe('My First Test', () => {
    it('Visit Amazon ', () => {
      cy.visit('https://www.amazon.com/')
      cy.get('#twotabsearchtextbox').type("T-Shirt")
      cy.get("#nav-search-submit-button").click()
      cy.get("#search").contains("T-Shirt")

    })

   

})
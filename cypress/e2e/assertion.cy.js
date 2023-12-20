
describe('My First Test', () => {
    it('implicit assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     // cy.url().should('include', 'orangehrmlive.com')
       // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','opensource-demo.orangehrmlive.com')
   
      //cy.url().should('include', 'orangehrmlive.com')
       // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       // .should('contain','opensource-demo.orangehrmlive.com')
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','opensource-demo.orangehrmlive.com')

        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="username"]').should('have.value','Admin')

    })

    it('explicit assertions', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()

      let expName = "Paul Collings"; 
      cy.get('.oxd-userdropdown-name').then((x)=> {
     let actName = x.text()
     expect(actName).to.eql(expName)
     assert.equal(actName,expName)
  })

    })
 
 
   

})
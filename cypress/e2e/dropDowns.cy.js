Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
 

describe('Handling dropdown', ()=> {

    it.skip('Dropdown with select', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Nigeria').should('have.value','Nigeria')
    })

    it('Dropdown without selector', ()=>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
       
    })


    //.globalcountrycode valid #zcf_address_country

})


describe('Checking UI Elements', ()=> {

    it('Checking Radio Buttons', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.radioButton[value="radio1"]').should('be.visible')
        cy.get('.radioButton[value="radio2"]').should('be.visible')
        cy.get('.radioButton[value="radio3"]').should('be.visible')

        cy.get('.radioButton[value="radio1"]').check().should('be.checked')
        cy.get('.radioButton[value="radio2"]').should('not.be.checked')
        cy.get('.radioButton[value="radio3"]').should('not.be.checked')

        cy.get('.radioButton[value="radio2"]').check().should('be.checked')
        cy.get('.radioButton[value="radio1"]').should('not.be.checked')
        cy.get('.radioButton[value="radio3"]').should('not.be.checked')
    })

    it('Checking Checkboxes', ()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('input[name="checkBoxOption1"]').should('be.visible')
       /// cy.get('input[name="checkBoxOption2"]').should('be.visible')
       // cy.get('input[name="checkBoxOption3"]').should('be.visible')
        
        //cy.get('input[name="checkBoxOption1"]').check().should('be.checked')
       //cy.get('input[name="checkBoxOption1"]').uncheck().should('not.be.checked')

       cy.get('input[type="checkbox"]').check().should('be.checked')
       cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

       cy.get('input[type="checkbox"]').first().check().should('be.checked')
       cy.get('input[type="checkbox"]').last().check().should('be.checked')
    })

})



class practicePage {

static landingHomePage(){
    cy.visit('https://codenboxautomationlab.com/practice/')

    }

static displayHomePage(){
    cy.get('page-title').invoke('text').then((text1) =>{
        expect(text1).to.eq('Automation Practice') //Matching The Text//

    })
}


static getDropDownOption(){
    cy.get('dropdown-class-example').select('API').should('have.value','option3')
}

static searchCountry(){
    cy.get('autocomplete').type('in')
    cy.get('ui-menu-item').each(($e1, index ,$list) => {
        if($e1.text() === 'India') {
            cy.wrap($e1).click()
        }
    })
}

static clickOnRegForm(){
    cy.contains('Registration Form').click({force:true})
    cy.url().should('include','registration-form')
    
}
}
export default practicePage;
class inputPage_objects
{

   

    edit()
    {
        return cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item')
    }

    enterYourName()
    {
        return cy.get('#fullName')
    }

    keyboardTab()
    {
        return cy.get('#join')
    }

    whatIsInTextBox()
    {
        return cy.get('#getMe')
    }

    clearTheText()
    {
        return cy.get('#clearMe')
    }

    confirmDisabledBox()
    {
        cy.get('#noEdit')
    }
    
    confirmReadOnly()
    {
        cy.get('#dontwrite')
    }
    
}
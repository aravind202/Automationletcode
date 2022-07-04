class letCodeHomePage 
{
    menu()
    {
        return cy.get('.navbar-burger')
    }
    
    workspace()
    {
        return  cy.get('#testing')
    }
}

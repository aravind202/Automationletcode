class buttonPage_objects
{

    goToHomeAndComeBack()
    {
        return cy.get('#home')
    }
    xyCoordinates()
    {
        return cy.get('#position')
    }
    getColour()
    {
        return cy.get('#color')
    }
    heightAndWidth()
    {
        return cy.get('#property')
    }
    disabled()
    {
        return cy.get(':nth-child(5) > .control > #isDisabled')
    }
    holdButton()
    {
        return cy.get('h2')
    }
}
export default button_objects;

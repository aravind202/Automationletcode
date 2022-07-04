class workSpacePage

{
    editButton()
    {
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item')
    }

    clickButton()
    {
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(2) > app-menu > .card > .card-footer > .card-footer-item')
    }

    dropDownButton()
    {
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(3) > app-menu > .card > .card-footer > .card-footer-item')
    }

    dialogButton()
    {
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(4) > app-menu > .card > .card-footer > .card-footer-item')
    }
}


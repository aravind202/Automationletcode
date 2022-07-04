import buttonPage_objects from '../support/pom/buttonPage'
import letCodeHomePage from '../support/pom/letCodehomePage'
const letCodeHomePage = new letCodeHomePage()
const buttonObjects = new buttonPage_objects()

describe('Button', () => {

    beforeEach(function(){
        cy.fixture('example').then(function(data){
          globalThis.data = data
        })
      })

    it('Insight Exercise' , () =>{
        cy.visit(data.url) 
        cy.get('.navbar-burger').click()
        cy.get('#testing').click()
        cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(2) > app-menu > .card > .card-footer > .card-footer-item').click()
        cy.get('#home').click()
        cy.go(-1)
        //cy.get('#color')
        

    })

    /*it('Click Exercise' , () =>{
       cy.visit('https://letcode.in/') 
       cy.get('.navbar-burger').click()
       cy.get('#testing').click()
       cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(2) > app-menu > .card > .card-footer > .card-footer-item').click()
       cy.get('#home').click()
       //cy.wait(2000)
       cy.go(-1)
       //var buttonlocation = cy.get('#position').location('toString')
       //var x = cy.get('#position').get
       //var y = cy.get('#position').getYcoordinate()
       //var buttonlocation = cy.get('#position').location('toString')
       //cy.log(x)
       //cy.log(y)
       //cy.location('port')
       //cy.get('#color').should("not.have.css", "background-color", "rgb(232, 238, 242)")
       //cy.get(".communications-icon").should("not.have.css", "background-color", "rgb(232, 238, 242)")
       //cy.get('#color').should('have.css', 'background-color', 'rgb(255, 0, 0)')
       cy.get('#color').should('have.css', 'background-color', 'rgb(138, 77, 118)')
           //cy.get('#property')
    })*/
    
})
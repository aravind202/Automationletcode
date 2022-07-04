import letCodeHomePage from '../support/pom/letCodehomePage'
const letCodeHomePage = new letCodeHomePage()
import buttonPage_objects from '../support/pom/buttonPage'
const buttonObjects = new buttonPage_objects()
import workSpacePage from '../support/pom/workSpaceTestPage'
const workSpacePage = new workSpacePage()
describe('Input', () => {

  beforeEach(function(){
    cy.fixture('example').then(function(data){
      globalThis.data = data
    })
  })
  it('Type Exercise', () => {
    cy.visit(data.url)
    letCodeHomePage.menu().click()
    letCodeHomePage.workspace().click()
    workSpacePage.editButton().click()



  
    cy.get('#fullName').type("Aravind")
    cy.get('#join').type("How are you").tab()
    cy.get('#getMe').should('have.value', 'ortonikc')


  })
  it('Type Exercise 1' , () => {
    cy.visit(data.url)
    letCodeHomePage.menu().click()
    letCodeHomePage.workspace().click()
    workSpacePage.clickButton().click()



  //cy.visit('https://letcode.in/')
  cy.get('.navbar-burger').click()
  cy.get('#testing').click()
  cy.get(':nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item').click()
  cy.get('#clearMe').clear()
  cy.get('#noEdit').should('be.disabled')
  cy.get('#dontwrite').should('have.attr', 'readonly', 'readonly')
})
})
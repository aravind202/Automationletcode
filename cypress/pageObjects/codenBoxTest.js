import practicePage from './pageObjects/practicePage'
describe('My Test Suite' , () =>{



before(function(){
    practicePage.landingHomePage()

})
    
    it('Automation Practice Test Case' , () =>{
        practicePage.displayHomePage();
        practicePage.getDropDownOption();
        practicePage.searchCountry();
        practicePage.clickOnRegForm();

    })

})
//import openAccountAddPageObjects from 'cypress/support/PageObjects/OpenAccountPageObjects.cy.js'
//Create the Suite
describe("XYZ Bank Open Account",function(){

    beforeEach(function () {
        //ViewPort setting
        cy.viewport(1920, 1080)
        //Load the fixture file
        cy.fixture('test_data').then((data) => {
            this.data = data
            //Launching website for all it blocks
            cy.visit(this.data.url)
        })
    })

    it("open Account for Customer",function(){
        cy.openAccountForCustomer();
    })
})
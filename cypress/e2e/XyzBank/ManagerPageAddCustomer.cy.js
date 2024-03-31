
describe('XYZ bank Suite', () => {

    beforeEach(function () {

        //ViewPort setting
        cy.viewport(1920, 1080)

        //Load the fixture file
        cy.fixture('test_data').then((data) => {

            this.data = data

            //Launching website for all it blocks
            cy.launchWebsite(this.data.url)
        })
    
    })

    it("addCustomerButton",function(){
        //Clicking on Add Customer Button
        cy.AddCustomerButton(this.data.firstName,this.data.lastName,this.data.postCode)
        
        


    })
})
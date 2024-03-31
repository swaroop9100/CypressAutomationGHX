

// Orange HRM Project for Practice
describe("Sauce Demo Project", function(){
    //using before hook
    beforeEach(function(){
        //Getting data from fixtures
        cy.fixture('Practice/OrangeHRM').then(function(data){
            this.data=data
            //Open URL
            cy.visit(this.data.url)
            cy.SauceDemoLoginFunationality(this.data.username,this.data.password)


        })
    })

    it("Verify the Leave Functionality",function(){
        //Verify Leave functionaiity
        cy.LeaveFunctionality()
    })

    

})





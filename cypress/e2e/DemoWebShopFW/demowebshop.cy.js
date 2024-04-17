//Get the cypress instantiation using reference types. we declared as Global level in jsconfig.json file
//create the test suite
describe("Demo web shop E2E",function () {

    //Providing the pre-condition using hooks
    beforeEach(()=>{
        //Open browser URL
        cy.visit("https://demowebshop.tricentis.com/")
        cy.get('a[class="ico-register"]').should('be.visible')
    })

    it("Demoshop user Registration",function(){
        cy.ClickRegisterLink()
        cy.demoshopUserRegistration()
        cy.demoshopRegisterConformationMessage()
        
    })
})
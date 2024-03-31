///<reference types="cypress"/>

//Create the Suite using the describe block
describe("Reading data from web table",()=>{
    beforeEach(()=>{
        cy.visit("https://demowebshop.tricentis.com/")
        //cy.viewport(1024, 768)

    })
    it("finding the elemment",()=>{
        cy.get("ul.top-menu li").should('have.length','12')
        cy.get("ul.top-menu").find('Desktops        ').click()

    })
 

})
///<reference types="cypress"/>

//Create the Suite using the describe block
describe("Reading data from web table",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //cy.viewport(1024, 768)

    })
    it("finding the elemment",()=>{
        cy.get('#pagination').find('li').eq(1).click()

        //cy.get('#productTable').shadow().find('td','Product 13').click()

    })
 

})
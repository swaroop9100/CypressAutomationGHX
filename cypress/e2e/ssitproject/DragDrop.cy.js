///<reference types="cypress"/>

//Create the Suite using the describe block
describe("Drag and Drop",()=>{

    it("Drag and Drop",function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //Drag and Drop
        cy.get('#draggable').drag('#droppable', {force: true} )
        cy.screenshot()
        // Slider Handle
        cy.get('#slider >span').invoke('attr',"style","left: 70%;")

    })

})
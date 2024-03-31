//to get Cypress IntelliSense in VSCode.
/// <reference types="cypress" />
//Create the test suite
describe("Using Session", function () {

    it("Open Browser Incognito Mode", () => {

        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("testing{enter}")
        
    })
})
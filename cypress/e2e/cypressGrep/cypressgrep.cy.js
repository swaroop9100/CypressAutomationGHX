//to get Cypress IntelliSense in VSCode.

/// <reference types="cypress" />

//Create the test suite
describe("cypress grep", function () {
    // create test case using it block
    it("cypress grep 1",{ tags: ['@smoke', '@regression'] }, function () {
        cy.log('first Testcase Start')
        cy.visit("https://www.google.com/")
        cy.xpath('//textarea[@class="gLFyf"]').type('testing')
    })

    it("cypress grep 2",{ tags: '@smoke' }, function () {
        cy.log('second Testcase Start')
        cy.visit("https://www.google.com/")
        cy.xpath('//textarea[@class="gLFyf"]').type('testing')
        //cy.get(".G43f7e").find('.sbct').click()
    })

    it("cypress grep 3",{ tags: ['@smoke', '@regression'] }, function () {
        cy.log('third Testcase Start')
        cy.visit("https://www.google.com/")
        cy.xpath('//textarea[@class="gLFyf"]').type('testing')
       // cy.get(".G43f7e").find('sbct PZPZlf').eq(1).click()
    })

})
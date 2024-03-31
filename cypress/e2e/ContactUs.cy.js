// URL: https://automationexercise.com/

/// <reference types="cypress" />


describe("Login Test Suite", function () {

    beforeEach(function () {

        cy.fixture('Testdata').then(function (data) {
            this.data = data
            //Launch the website   
            cy.visit(this.data.url)
            cy.viewport(1280, 720)

        })
    })

    it("ContactusInHomePage",function(){
        //Click on Contact Us in home page
        cy.ClickOnContactUsLinkInHomeScreen()
        //Filling the Contact Us form
        cy.FillingContactUsForm()       


    })

    
    
})
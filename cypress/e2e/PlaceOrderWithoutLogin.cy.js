//https://automationexercise.com/

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

    it.only("Place Order as Guest user",function(){
        
        //Clicking on Product Link
        cy.ClickingProductLinkInHomePage()
        //Searc the product and Click on Search icon in search box
        cy.SearchProductInHomepage(this.data.productname)
        //Verifying Added Popup
        cy.VerifyAddedPopup()
        //Clicking Cart Link in a header of the screen
        cy.ClickingCartLink()
        //Clicking on Proceed To Checkout
        cy.ClickingProceedToCheckOut()
        //Alter Message Verification
        cy.VerifyAlertMessageInShoppingCartScreen()
        
    })

    
    
})
//https://automationexercise.com/

describe("Login Test Suite", function () {

    beforeEach(function () {

        cy.fixture('Testdata').then(function (data) {
            this.data = data
            //Launch the website   
            cy.visit(this.data.url)
            cy.viewport(1280, 720)

        })
    })

    it("Place Order as Logined user",function(){
        //Login to the site
        cy.LoginFunctionality(this.data.email, this.data.password)
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
        //Verify Address, Review Order banners and Comments of your order
        cy.VerifyAddressDetailsAndReviewYourOdersSections()
        //Click on Place Order Button
        cy.ClickPlaceOrderButton()
        //Enter Payment Details
        cy.Payment()
        //Verification after Order Placed 
        cy.OrderPlacedVerificationDownloadInvoiceCOntinue()

    })

    it("Place Order as Guest user",function(){
        
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
    
  it.only("Verify the View Product link",function(){

    cy.xpath("//a[@href='/product_details/1']").should('be.text',"View Product").click()
    cy.xpath("//input[@id='quantity']").trigger('mouseover').focus()
    cy.xpath("//input[@id='quantity']").clear().type('2',{force:true})

  })
    
})
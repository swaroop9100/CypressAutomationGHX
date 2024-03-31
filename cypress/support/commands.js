// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//import cypress from 'cypress';
//For file upload if we are using Custom command
import 'cypress-file-upload';
//For Drag and Drop
require('@4tw/cypress-drag-drop')
//import '@4tw/cypress-drag-drop'

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
//Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//If website is not loaded and getting uncaught exception error need to update below line
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


Cypress.Commands.add("LoginFunctionality", (email, password) => {

    //Clicking on signup/login
    cy.xpath("//a[@href='/login']").click({ force: true })

    //Ener MailID
    cy.xpath("(//input[@name='email'])[1]").type(email)
    //Enter Password
    cy.xpath("//input[@name='password']").type(password)

    //Click on submit button
    cy.xpath("//button[@data-qa='login-button']").click({ force: true })
})
Cypress.Commands.add("LogoutFunctionality", () => {
    //Verifying Logout link visible or not
    cy.xpath("//a[@href='/logout']").should("have.text", " Logout")
    // Clickoing on Logout
    cy.xpath("//a[@href='/logout']").click({ force: true })
})
Cypress.Commands.add("ClickingProductLinkInHomePage", () => {
    //Click on product link
    cy.xpath("//a[@href='/products']").click()
})
Cypress.Commands.add("SearchProductInHomepage", (productname) => {
    //Searc the product 
    cy.xpath("//input[@id='search_product']").type(productname)
    //Click on Search icon in search box
    cy.xpath("//button[@id='submit_search']").click()
    //Clicking on Add To Cart button 
    cy.xpath("//div[@class='productinfo text-center']//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart']").click()
})
Cypress.Commands.add("VerifyAddedPopup", () => {
    //Verifying Added popop after adding product to the cart
    cy.xpath("//h4[text()='Added!']").should('be.visible')
    //Verifying View Cart link displaying on popup
    cy.xpath("//u[text()='View Cart']//parent::a").should('be.visible')
    //Clicking on Continue Shopping
    cy.xpath("//button[@class='btn btn-success close-modal btn-block']//parent::div").click()
    cy.wait(2000)
})
Cypress.Commands.add("ClickingCartLink", () => {
    //Verifying the Add To Cart button
    cy.xpath("//a[@href='/view_cart']").should('be.visible')
    //Clicking on Cart link header of the screen
    cy.xpath("(//a[@href='/view_cart'])[1]").click()
})
Cypress.Commands.add("ClickingProceedToCheckOut", () => {
    // Verify the Proceed To Checkout button visible
    cy.xpath("//a[@class='btn btn-default check_out']").should('be.visible')
    // Click On Proceed To Checkout button
    cy.xpath("//a[@class='btn btn-default check_out']").click()
})
Cypress.Commands.add("VerifyAddressDetailsAndReviewYourOdersSections", () => {
    //Verify the Address Details banner
    cy.xpath("//h2[text()='Address Details']").should('have.text', "Address Details")
    //Verify the Review Your Order banner
    cy.xpath("//h2[text()='Review Your Order']").should("be.visible")
    //Verify the text label to add a comment about your order
    cy.xpath("//label[text()='If you would like to add a comment about your order, please write it in the field below.']").should('be.visible')
    cy.xpath("//textarea[@name='message']").type("Its my first order")
})
Cypress.Commands.add("ClickPlaceOrderButton", () => {
    //Verify and clicking on Place Order Button in Checkout screen
    cy.xpath("//a[text()='Place Order']").should('have.text', "Place Order")
    cy.xpath("//a[text()='Place Order']").click()

})
Cypress.Commands.add("Payment", () => {
    //Verify the payment banner
    cy.xpath("//h2[text()='Payment']").should('have.text', "Payment")
    //Enter Name on Card
    cy.xpath("//input[@name='name_on_card']").type("Swaroop Y")
    //Enter Card Number
    cy.xpath("//input[@name='card_number']").type('5425233430109903')
    //Enter CVC number
    cy.xpath("//input[@name='cvc']").type('542')
    //Enter Expiry Month
    cy.xpath("//input[@name='expiry_month']").type('04')
    //Enter Expiry Year
    cy.xpath("//input[@name='expiry_year']").type('2026')
    //Enter Pay and Confirm Order
    cy.xpath("//button[@id='submit']").click()

})
Cypress.Commands.add("OrderPlacedVerificationDownloadInvoiceCOntinue", () => {
    //Verify Order Placed label message
    cy.xpath("//b[text()='Order Placed!']").should('have.text', "Order Placed!")
    //Verify the text meesage after placing order successfully
    cy.xpath("//p[text()='Congratulations! Your order has been confirmed!']").should('have.text', "Congratulations! Your order has been confirmed!")
    //Verify the Download Invoice after placing order successfully
    cy.xpath("//a[text()='Download Invoice']").should("be.visible")
    //Verify the Continue button after placing order successfully
    cy.xpath("//a[text()='Continue']").should("be.visible")
    //Clicking on Download Invoice Button
    cy.xpath("//a[text()='Download Invoice']").click()
    //Click on continue button
    cy.xpath("//a[text()='Continue']").click()

})
Cypress.Commands.add("ClickOnContactUsLinkInHomeScreen", () => {
    //Click on Contact us
    cy.xpath("//a[text()=' Contact us']").click()
    //Verify the contact us label
    cy.xpath("(//h2[@class='title text-center'])[1]").should("be.visible")
})
// File Upload Code
Cypress.Commands.add("FillingContactUsForm", () => {
    //Verify the GET IN TOUCH label
    cy.xpath("//h2[text()='Get In Touch']").should("be.visible")
    //Enter Name into text field
    cy.xpath("//input[@name='name']").type("Subbu")
    //Enter Email into text field
    cy.xpath("//input[@name='email']").type("smalina@ghx.com")
    //Enter Subject into text field
    cy.xpath("//input[@name='subject']").type("Order Not Received")
    //Enter message in detail
    cy.xpath("//textarea[@id='message']").type("I placed the order two days before but till now order was not deliverd")

    //Uploading file 
    cy.get('input[type=file]').attachFile('Book2.xlsx')
    //Click on submit button
    cy.xpath("//input[@name='submit']").click({ force: true })
    //Scrolling to the top position
    cy.scrollTo('top')
    //Validate success message after file upload
    cy.xpath("//div[@class='status alert alert-success']").should('have.text', 'Success! Your details have been submitted successfully.')
    //Click on Home button
    cy.xpath("//a[@class='btn btn-success']").click()

})
Cypress.Commands.add("VerifyAlertMessageInShoppingCartScreen",()=>{
    //Verify the alert message 
cy.xpath("//h4[text()='Checkout']").should('have.text',"Checkout")
cy.xpath("//p[text()='Register / Login account to proceed on checkout.']").should("be.visible")
cy.xpath("//u[text()='Register / Login']").should("be.visible")
cy.xpath("//button[text()='Continue On Cart']").should("be.visible")
cy.xpath("//button[text()='Continue On Cart']").click()

})


//Orange HRM Project Custom Commands
Cypress.Commands.add("SauceDemoLoginFunationality",(username,password)=>{
    //Enter username
    cy.xpath('//input[@name="username"]').type(username)
    //Enter password
    cy.xpath('//input[@name="password"]').type(password)
    //Click on login button
    cy.xpath('//button[text()=" Login "]').click({force:true})
})

Cypress.Commands.add("LeaveFunctionality",()=>{

    cy.xpath('//span[text()="Leave"]').click({force:true})
    cy.xpath('//h6[text()="Leave"]').should('have.text',"Text")
    //cy.xpath('//i[@class="oxd-icon bi-calendar oxd-date-input-icon"]').click({force:true})
    //cy.xpath('(//div[@class="oxd-date-input"])[1]').clear('input').type("2024-05-25")
    cy.xpath('(//i[@class="oxd-icon bi-calendar oxd-date-input-icon"])[1]').click()
    
})

/* Sample */

Cypress.Commands.add("LoginUser",(email,password)=>{

    cy.visit("https://demowebshop.tricentis.com/")
        cy.get(".ico-login").click()
        cy.get("#Email").type(email)
        cy.get("#Password").type(password)
        cy.get(".button-1.login-button").click()

})

Cypress.Commands.add("LogoutButton",()=>{

    cy.get(".ico-logout").click()
})


Cypress.Commands.add("parseXlsx",(inputFile)=>{
    return cy.task('parseXlsx',{filePath: inputFile})
});


// Demo Shop Class
Cypress.Commands.add("UserReg",function(){

    cy.log("First TC Start")
    //cy.visit("https://demowebshop.tricentis.com/")
    //By using Xpath Selector
    //cy.xpath('//textarea[@title="Search"]').type('testing')
    //Click on Register Link
    cy.get(".ico-register").click()
    //Verifying the title of Register
    cy.get('.page-title').should("have.text","\n            Register\n        ")
    //Click on Male radio buutton
    cy.get("#gender-male").check()
     //Enter First Name
    cy.get("#FirstName").type(this.rrr.firstname)
    //Enter Last Name
    cy.get("#LastName").type(this.rrr.lastname)
    //Enter Email
    cy.get("#Email").type(this.rrr.email1)
    //enter password
    cy.get("#Password").type(this.rrr.password)
    //enter confirm password
    cy.get("#ConfirmPassword").type(this.rrr.password)
    //click on submit button
    cy.get("#register-button").click()
    //verify the register confirmation
    cy.get(".page-title").should('have.text', "\n        Register\n    ")
    //clcik on continuw button
    cy.get(".button-1.register-continue-button").click()
    
    cy.log("First TC End")

})

Cypress.Commands.add("UserLogin",function(){

    cy.log("Second TC Start")
    /* cy.visit("https://demowebshop.tricentis.com/")
     //clicking on login button
     cy.get(".ico-login").click() 
     //verify the page tile 
     cy.get(".page-title").should("have.text","\n        Welcome, Please Sign In!\n    ")
     //enter email id
     cy.get("#Email").type("sanjusai477@gmail.com")
     //enter password
     cy.get("#Password").type("123456")
     //click on login button
     cy.get(".button-1.login-button").click() */
     //verify the user login successfully or not while validating Logout button
      cy.get(".ico-logout").should("be.visible")
      cy.log("verifying logout button")
      cy.log("Second TC End") 
})

Cypress.Commands.add("AddItemToCart",function(){
    cy.log("Third TC Start")

    /* cy.visit("https://demowebshop.tricentis.com/")
    //clicking on login button
   cy.get(".ico-login").click() 
   //verify the page tile 
   cy.get(".page-title").should("have.text","\n        Welcome, Please Sign In!\n    ")
   //enter email id
   cy.get("#Email").type("sanjusai477@gmail.com")
   //enter password
   cy.get("#Password").type("123456")
     //click on login button
   cy.get(".button-1.login-button").click() */
 
    //click on add to cart button 14.1 inch laptop
    cy.xpath('(//input[@value="Add to cart"])[2]').click()
    cy.xpath("//a[text()='shopping cart']").should("have.text","shopping cart")
     //click on add to cart button Build your own computer
     cy.xpath('(//input[@value="Add to cart"])[4]').click()
     cy.wait(2000)
     cy.xpath('//input[@id="product_attribute_16_3_6_18"]').check()
     cy.get("#add-to-cart-button-16").click()
     cy.xpath("//a[text()='shopping cart']").should("have.text","shopping cart")
    cy.log("Third TC End")
})
Cypress.Commands.add("ShoppingCartLink",function(){
 
    /* cy.visit("https://demowebshop.tricentis.com/")
    //clicking on login button
   cy.get(".ico-login").click() 
   //verify the page tile 
   cy.get(".page-title").should("have.text","\n        Welcome, Please Sign In!\n    ")
   //enter email id
   cy.get("#Email").type("sanjusai477@gmail.com")
   //enter password
   cy.get("#Password").type("123456")
     //click on login button
   cy.get(".button-1.login-button").click() */
    // Clicking the shopping cart
    cy.xpath('//span[text()="Shopping cart"]').click()
    //Vrify the Shopping cart screen
    cy.xpath('//h1[text()="Shopping cart"]').should("have.text","Shopping cart")
})
Cypress.Commands.add("checkout",function(){
    
})

Cypress.Commands.add(("HRMLogin"),(username,password)=>{


    cy.session("Login Session",()=>{
  
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.get('input[name="username"]').type(username)
      cy.get('input[name="password"]').type(password)
      cy.get('button[type="submit"]').click()
  
  })  
  
  })
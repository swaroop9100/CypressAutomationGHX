
describe("ssitproject",function(){

       //Hooks - Before executing every testcase this hook will execute
    beforeEach(function(){
       
        cy.fixture('DemoShop').then(function(rrr){
            this.rrr=rrr

            //Open URL
            cy.visit(this.rrr.url)
            //clicking on login button
            cy.get(".ico-login").click() 
            //enter email id
            cy.get("#Email").type(this.rrr.email)
            //enter password
            cy.get("#Password").type(this.rrr.password)
            //click on login button
            cy.get(".button-1.login-button").click()
         })
      })
    
 
    //Hooks- After executing every testcase this hook will execute
    afterEach(()=>{
       cy.log("After Each hook")
       //click on Logout button
       cy.get(".ico-logout").click()
       cy.log("After clicking logout button")
       //
       //cy.get("#topcartlink")
       //.should("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ")
       //.and("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ")
 
    })
 
    // User Registration for MALE
    it.skip("User Registration",function(){
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
    
    it("Verify User Login", function(){
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
    it("Add items to cart",function(){
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
 
    it("click on Shopping cart link on header",function(){
 
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
    it("verify the shopping cart after adding items",function(){
    
      /*  cy.visit("https://demowebshop.tricentis.com/")
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
       //check the terms and service checkbox in shopping cart
       cy.get("#termsofservice").check()
       //click on check button in shopping cart
       cy.get("#checkout").click()
       //Verify the screen navigation after click on check out
       cy.get(".page-title").should("have.text","\n        Checkout\n    ")
 
    })
    it("checkout Functionality",function(){
 
       /* cy.visit("https://demowebshop.tricentis.com/")
       //clicking on login button
       cy.get(".ico-login").click() 
       //enter email id
       cy.get("#Email").type("sanjusai477@gmail.com")
       //enter password
       cy.get("#Password").type("123456")
       //click on login button
       cy.get(".button-1.login-button").click() */
       // Clicking the shopping cart
       cy.xpath('//span[text()="Shopping cart"]').click()
       //check the terms and service checkbox in shopping cart
       cy.get("#termsofservice").check()
       //click on check button in shopping cart
       cy.get("#checkout").click()
       //Billing Add - Verify first Name
       /* cy.get("#BillingNewAddress_FirstName").type("Sanju").should("have.value","SanjuSanju")
       //Billing Add - Verify Last Name
       cy.get("#BillingNewAddress_LastName").type("Sai").should("have.value","Sai")
       //Billing Add - Verify the Email
       cy.get("#BillingNewAddress_Email").type("sanjusai477@gmail.com").should("have.value","sanjusai477@gmail.com")
       //Billing Add - Enter Company name
       cy.get("#BillingNewAddress_Company").type("SSIT Tech")
       //Billing Add - Select Country
       cy.get("#BillingNewAddress_CountryId").select("United States")
       //Billing Add - Select State
       cy.get("#BillingNewAddress_StateProvinceId").select("California")
       //Billing Add - Enter the City
       cy.get("#BillingNewAddress_City").type("New Jersey")
       //Billing Add - Enter Address 1
       cy.get("#BillingNewAddress_Address1").type(" 14/1 Lane 1, First Building")
       //Billing Add - Enter Zip Code
       cy.get("#BillingNewAddress_ZipPostalCode").type("123456")
       //Billing Add - Phone Number
       cy.get("#BillingNewAddress_PhoneNumber").type("9645781230")
       //Billing Add - Fax Number
       cy.get("BillingNewAddress_FaxNumber").type("245789640")
       //Billing Add - Click on Continue button
       cy.get("#billing-buttons-container").click() */
       //Billing Address - Select a shipping address from a dropdown
        //cy.get('select[onchange="Billing.newAddress(!this.value)"]').type("Sanju Sai, wewewewe, New Jersey 23232323, United States").should("have.value","Sanju Sai, wewewewe, New Jersey 23232323, United States")
       //Billing Address - Click on continue
       cy.get("input[onclick='Billing.save()']").click({force: true})
       cy.wait(2000)
        //Shipping Address - Click on continue
        cy.get('input[onclick="Shipping.save()"]').click({force: true})
       //Shipping Method - Select the Radio Button
       cy.get("#shippingoption_1").check()
       //Shipping Method - Click on Continue
       cy.get("input[class='button-1 shipping-method-next-step-button']").click()
       //Payment Method - Select the radio button for Card
       cy.get("#paymentmethod_3").check()
       //Payment Method - Click on continue
       cy.get('input[onclick="PaymentMethod.save()"]').click()
       //Payment Information - Enter PO Number
       cy.get("#PurchaseOrderNumber").type("456987")
       //Payment Information - Click on Continue button
       cy.get('input[onclick="PaymentInfo.save()"]').click()
       //Confirm Order - Click on continue button
       cy.get('input[onclick="ConfirmOrder.save()"]').click()
       cy.wait(10000)
       //Verify the Page title after placing order
       cy.get(".page-title").should("have.text","\n        Thank you\n    ")
       //Verify the successfully order
       cy.get(".title").should("have.text","\n                Your order has been successfully processed!\n            ")
       //Click on link to see the order details
       cy.xpath("//a[text()='Click here for order details.']").click()
       //Verify the Order Information
       cy.get("div.page-title").should("have.text","\n            Order information\n            Print\n            PDF Invoice\n        ")
       //Click on PDF Invoice button
       cy.xpath("//a[text()='PDF Invoice']").click()
       /* //click on Logout button
       cy.get(".ico-logout").click()
       //
       cy.get("#topcartlink")
       .should("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ")
       .and("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ") */
    })
    
 })
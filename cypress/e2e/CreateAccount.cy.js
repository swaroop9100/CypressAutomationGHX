//URL:https://automationexercise.com/
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

    it.skip("Create Account in automation exercise", function () {

        //Clicking on signup/login
        cy.xpath("//a[@href='/login']").click()
        //Enter Name into text field
        cy.xpath("//input[@data-qa='signup-name']").type("Swaroop1")
        //Enter Email into text field
        cy.xpath("//input[@data-qa='signup-email']").type("syandapalli1@ghx.com")
        //Click on signup button
        cy.xpath("//button[@data-qa='signup-button']").click()
        // Verify my account text
        cy.xpath("//b[text()='Enter Account Information']/parent::h2").should('have.text', 'Enter Account Information')
        //select Title
        cy.xpath("//input[@id='id_gender1']").click()
        // Enter Password
        cy.xpath("//input[@data-qa='password']").type("Swaroop123").blur()
        //select Days
        cy.xpath("//select[@id='days']").select('2')
        //select months
        cy.xpath("//select[@id='months']").select('10')
        //select year
        cy.xpath("//select[@id='years']").select('2014')
        //select check of newletter
        cy.xpath("//input[@id='newsletter']").check()
        //select check of newletter
        cy.xpath("//input[@id='optin']").check()
        //Verify Address Information
        cy.xpath("//b[text()='Address Information']").should("be.visible")
        //Enter first name
        cy.xpath("//input[@id='first_name']").type("Swaroop")
        //Enter Last name
        cy.xpath("//input[@id='last_name']").type("YYY")
        //Enter first name
        cy.xpath("//input[@id='company']").type("GHX")
        //Enter address1
        cy.xpath("//input[@id='address1']").type("1245,USA,NJ")
        //Enter Address2
        cy.xpath("//input[@id='address2']").type("4567,USA,NJ")
        //Select Country
        cy.xpath("//select[@id='country']").select("Singapore")
        //Enter State
        cy.xpath("//input[@id='state']").type("abcd")
        //Enter city
        cy.xpath("//input[@id='city']").type("HYD")
        //Enter Zipcode
        cy.xpath("//input[@id='zipcode']").type("12345")
        //Enter Mobile Number
        cy.xpath("//input[@id='mobile_number']").type("12345")
        //Click on Create Account
        cy.xpath("//button[@data-qa='create-account']").click()
        //Verification of account creation
        cy.xpath("//b[text()='Account Created!']").should('be.visible')
    })

    it("Login functionality", function () {

        cy.LoginFunctionality(this.data.email, this.data.password)
    })


    it("Login with invalid data ", function () {

        //Clicking on signup/login
        cy.xpath("//a[@href='/login']").click({ force: true })
        //Ener MailID
        cy.xpath("(//input[@name='email'])[1]").type(this.data.invalidemail)
        //Enter Password
        cy.xpath("//input[@name='password']").type(this.data.invalidpassword)
        //Click on submit button
        cy.xpath("//button[@data-qa='login-button']").click({ force: true })
        //Verify error message
        cy.xpath("//p[text()='Your email or password is incorrect!']").should('be.visible')

    })

    it("Search product as a loggedin user", function () {
        //Login to the site
        cy.LoginFunctionality(this.data.email, this.data.password)
        //Click on product link
        cy.ClickingProductLinkInHomePage()
        cy.xpath("//a[@href='/products']").click()
        //Searc the product and Click on Search icon in search box
        cy.SearchProductInHomepage(this.data.productname)
        cy.LogoutFunctionality()


    })


    // Veryfying Logout Functionality
    it("Verifying Logout Functionality", function () {
        //Login to the site
        cy.LoginFunctionality(this.data.email, this.data.password)
        cy.LogoutFunctionality()
    })
    //Add product to cart
    it.only("Verifying Mouse hover on image and clicking add to cart",function(){
        //Login to the site
        cy.LoginFunctionality(this.data.email, this.data.password)
        //Clicking on Product Link
        cy.ClickingProductLinkInHomePage()
        //Searc the product and Click on Search icon in search box
        cy.SearchProductInHomepage(this.data.productname)
        //Scrolling the page
        cy.xpath("//img[@src='/get_product_picture/13']//parent::div").scrollIntoView()
        //Clicking on Add To Cart button 
        cy.xpath("//div[@class='productinfo text-center']//a[@class='btn btn-default add-to-cart'][normalize-space()='Add to cart']").click()
        //cy.xpath("(//a[@href='/view_cart'])[1]").invoke("show").trigger('mouseover',{force:true})
        
        Cy.VerifyAddedPopup()
        cy.ClickingCartLink()
        

    })

    

})
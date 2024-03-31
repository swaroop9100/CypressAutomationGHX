//to get Cypress IntelliSense in VSCode.
/// <reference types="cypress" />
//Create the test suite
describe("Using Session", function () {
    //Using hook
    beforeEach(() => {
        cy.session("Login Session",()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get('input[name="username"]').type("Admin")
            cy.get('input[name="password"]').type("admin123")
            cy.get('button[type="submit"]').click()
        })
    })     
    //Create Test Cases
    it("PIM-Add Employee", function () {
        // click on PIM in dashboard
        //cy.get('.oxd-main-menu-item-wrapper').eq(1).click()
        cy.wait(10000)
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList")
        //cy.get('.oxd-main-menu-item').eq(2).click()
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)').click()
        //validating PIM on dashboard
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text', "PIM")
        //clicking +Add button on PIM screen
        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        //verifying Add Employee 
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']").should('have.text', "Add Employee")
        // Enter First Name
        cy.xpath("//input[@name='firstName']").type('swaroop')
        // Enter Middle Name
        cy.xpath("//input[@name='middleName']").type('ysr')
        //Enter Last Name
        cy.xpath("//input[@name='lastName']").type('reddy')
        //click on save button 
        cy.xpath("//button[@type='submit']").click()
    })
    it("Click myinfo in dashboard",function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7")
        //Clicking on MyInfo in dashboard
        cy.xpath("//span[text()='My Info']").click()
        //Updating Personal Details
        //Enter Middle Name
        cy.xpath("//input[@class='oxd-input oxd-input--active orangehrm-middlename']").type("ys")
        //Enter Nick Name
        //cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]").type("swar")
        //Enter License Number
        //cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]").type("123546")
        //Enter License Expiry Date
       // cy.xpath("//input[@placeholder='yyyy-mm-dd']").click()
        //cy.xpath("//input[@placeholder='yyyy-mm-dd']").type(this.data.lexpirydate)
        //Enter SSN Number
        //cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[1]/div[1]/div[2]/input[1]").type("852369")
        //Enter SIN Number
        //cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[1]/div[2]/input[1]").type("147258")
        //Click the Nationality Dropdown 
        //cy.xpath("//div[contains(text(),'American')]").click()
        //Select the value in a nationality dropdown list
        cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click({force:true})
        //cy.xpath("//li[@data-value='Afgan']").click({force:true})
        cy.get("button[type='submit']").eq(0).click()
    })
})
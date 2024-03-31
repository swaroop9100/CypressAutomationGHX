//https://opensource-demo.orangehrmlive.com/

/// <reference types="cypress" />

describe("Login Test Suite", function () {

    beforeEach(function () {

        cy.fixture('Testdata').then(function (data) {
            this.data = data

            //Launch the website
            cy.visit(this.data.url)
            //Enter user name
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.username)
            //Enter password
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.password)
            //Click on submit button
            cy.xpath("//button[@type='submit']").click()
            //Load test data file from fixtures
        })
    })

    it("Click myinfo in dashboard",function(){

        //Clicking on MyInfo in dashboard
        cy.xpath("//span[text()='My Info']").click()
        //Updating Personal Details
        //Enter Middle Name
        cy.xpath("//input[@class='oxd-input oxd-input--active orangehrm-middlename']").type(this.data.mname)
        //Enter Nick Name
        cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[2]/div[1]/div[1]/div[2]/input[1]").type(this.data.nickname)
        //Enter License Number
        cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]/input[1]").type(this.data.lnumber)
        //Enter License Expiry Date
       // cy.xpath("//input[@placeholder='yyyy-mm-dd']").click()
        //cy.xpath("//input[@placeholder='yyyy-mm-dd']").type(this.data.lexpirydate)
        //Enter SSN Number
        cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[1]/div[1]/div[2]/input[1]").type(this.data.ssnnumber)
        //Enter SIN Number
        cy.xpath("//body/div[@id='app']/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[2]/div[3]/div[2]/div[1]/div[2]/input[1]").type(this.data.sinnumber)
        //Click the Nationality Dropdown 
        //cy.xpath("//div[contains(text(),'American')]").click()
        //Select the value in a nationality dropdown list
        cy.xpath("(//div[@class='oxd-select-text oxd-select-text--active'])[1]").click()
        cy.xpath("//li[@data-value='Afgan']").click()
        //cy.get("cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')").select('Indian')
        //cy.xpath("//div[contains(text(),'American')]").select('Indian')


        //Clicking on gender Male
       // cy.xpath("//input[@value='2']").check({force : true})



        




    })
})
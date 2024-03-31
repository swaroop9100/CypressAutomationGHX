// URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

/// <reference types="cypress" />

describe("Login Test Suite", function () {

    beforeEach(function () {
        //Load test data file from fixtures
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

    it("PIM-Add Employee", function () {
        // click on PIM in dashboard
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        //validating PIM on dashboard
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").should('have.text', this.data.dashboardheading)
        //clicking +Add button on PIM screen
        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click()
        //verifying Add Employee 
        cy.xpath("//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title']").should('have.text', this.data.employeHeading)
        // Enter First Name
        cy.xpath("//input[@name='firstName']").type(this.data.fname)

        // Enter Middle Name
        cy.xpath("//input[@name='middleName']").type(this.data.mname)
        //Enter Last Name
        cy.xpath("//input[@name='lastName']").type(this.data.Lname)
        //click on save button 
        cy.xpath("//button[@type='submit']").click()
    })
})
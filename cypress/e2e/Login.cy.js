/// <reference types="cypress" />

describe("Login Test Suite", function () {

    beforeEach(function () {
        //Launch the website
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        //Enter user name
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        //Enter password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.xpath("//button[@type='submit']").click()
    })

    it.skip("verify Dashboard fun", function () {
        //verify dashboard heading
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', "Dashboard")
    })








})

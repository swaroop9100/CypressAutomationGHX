//import { faker } from "@faker-js/faker"
let fpassword = faker.internet.password()

describe("faker API Usage", function () {
    

    //Data hot coded and registering the user using times
    it.skip("faker API Random Data Generation TC1", function () {
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
        cy.xpath('//input[@id="input-firstname"]').type('Swaroop123')
        cy.xpath('//input[@id="input-lastname"]').type('YS123')
        cy.xpath('//input[@id="input-email"]').type('testuser104512@gmail.com')
        cy.xpath('//input[@id="input-telephone"]').type('1234567980')
        cy.xpath('//input[@id="input-password"]').type('1234560')
        cy.xpath('//input[@id="input-confirm"]').type('1234560')
        cy.xpath('//input[@type="checkbox"]').check()
        cy.xpath('//input[@type="submit"]').click()

    })
    // test will run two times
    Cypress._.times(2, () => {
        //Randomly generating the data using faker API and user doing registering 
        it("faker API Random Data Generation TC2", function () {
            cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=account/register")
            cy.xpath('//input[@id="input-firstname"]').type(faker.person.firstName())
            cy.xpath('//input[@id="input-lastname"]').type(faker.person.lastName())
            cy.xpath('//input[@id="input-email"]').type(faker.internet.email())
            cy.xpath('//input[@id="input-telephone"]').type(faker.phone.number())
            cy.xpath('//input[@id="input-password"]').type()
            cy.xpath('//input[@id="input-confirm"]').type(fpassword)
            cy.xpath('//input[@type="checkbox"]').check()
            cy.xpath('//input[@type="submit"]').click()
        })
    })

})
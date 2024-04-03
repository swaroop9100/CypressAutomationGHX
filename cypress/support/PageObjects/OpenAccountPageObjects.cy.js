//Create class for open account page all objects
class openAccountAddPageObjects {

    bankManagerLoginButton() {
        return cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]')
    }
    bankManagerOpenAccount() {

        return cy.xpath('//button[@class="btn btn-lg tab btn-primary"]')
    }
    selectCustomer() {
        return cy.xpath('//select[@name="userSelect"]')
    }
    selectCurrency() {
        return cy.xpath('//select[@id="currency"]')
    }
    clickOnProcessButton() {
        return cy.xpath('//button[@type="submit"]')
    }
}

// Create Object for Above Class - to get the intelisence
const openAccountObjects = new openAccountAddPageObjects()

//Create Custom Commands
Cypress.Commands.add("openAccountForCustomer", () => {
    //Verify manaber button is visible
    openAccountObjects.bankManagerLoginButton().should('be.visible')
    //Click on manager login button
    openAccountObjects.bankManagerLoginButton().click()
    //Click on Open Account button
    openAccountObjects.bankManagerOpenAccount().click()
    //Select the Customer in customer dropdown
    openAccountObjects.selectCustomer().select('Test User')
    //Select the currency in  currency dropdown
    openAccountObjects.selectCurrency().select('Rupee')
    //Click on Process button on open account page
    openAccountObjects.clickOnProcessButton().click()
    //Verify the alert message
    cy.on('window:alert', (t) => {

        expect(t).to.contains('Account created successfully with account Number')
    })

})

// export the page objects
export default openAccountAddPageObjects

//Create class for open account page all objects
class openAccountAddPageObjects {

    bankManagerLoginButton() {
        return cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]')
    }
    bankManagerOpenAccount() {

        return cy.xpath('(//button[@class="btn btn-lg tab"])[2]')
    }
    selectCustomer() {
        return  cy.xpath('//select[@id="userSelect"]')
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
    openAccountObjects.selectCustomer().select(5)
    //Select the currency in  currency dropdown
    openAccountObjects.selectCurrency().select(3)
    //Click on Process button on open account page
    openAccountObjects.clickOnProcessButton().click()
    //Verify the alert message
    cy.on('window:alert', (t) => {

        expect(t).to.contains('Account created successfully with account Number')
    })

})

// export the page objects
export default openAccountAddPageObjects

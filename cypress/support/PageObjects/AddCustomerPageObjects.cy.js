
//Create class for add customer page all objects
class addCustomerPageObjects {

    bankManagerLoginButton() {
        return cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]')
    }
    bankManagerAddCustomerButton(){
        return cy.xpath('(//button[@class="btn btn-lg tab"])[1]') 
    }
    addCustomerFirstName(){
        return cy.xpath('//input[@ng-model="fName"]')
    }
    addCustomerLastName(){
        return cy.xpath('//input[@ng-model="lName"]')
    }
    addCustomerPostCode(){
        return cy.xpath('//input[@ng-model="postCd"]')
    }
    addCustomerClickButton(){
        return cy.xpath('//button[@type="submit"]')
    }
}
// Create Object for Above Class - to get the intelisence
const addCustomerPage = new  addCustomerPageObjects()

//Create Custom Commands
Cypress.Commands.add('AddCustomerButton',(firstName,lastName,postCode)=>{
    //Verify manaber button is visible
    addCustomerPage.bankManagerLoginButton().should('be.visible')
    //Click on manager login button
    addCustomerPage.bankManagerLoginButton().click()
    //Click on Add Customer Button
    addCustomerPage.bankManagerAddCustomerButton().click()
    //Enter First Name in Add Customer Page
    addCustomerPage.addCustomerFirstName().type(firstName)
    //Enter Last Name in Add Customer Page
    addCustomerPage.addCustomerLastName().type(lastName)
    //Enter post code in Add Customer Page
    addCustomerPage.addCustomerPostCode().type(postCode)
    //Clicking on Add Customer submit button
    addCustomerPage.addCustomerClickButton().click({force:true})
    //Verify the alert message
    cy.on('window:alert',(data)=>{
        expect(data).to.contains('Customer added successfully with customer id')
    })
})

// export the page objects 
export default addCustomerPageObjects

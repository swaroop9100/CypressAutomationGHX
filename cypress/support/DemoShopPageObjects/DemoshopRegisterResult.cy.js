
class demoshopRegisterResult{
    //verify the page title
    verifyPageTitle(){
        return cy.xpath('//div[@class="page-title"]')
    }
    //Verify the register message
    verifyRegisterMessage(){
        return cy.xpath('//div[@class="result"]')
    }
    //click on continue button
    clickOnContinueBUtton(){
        return cy.xpath('(//input[@type="button"])[2]')
    }
    //Verification after click on submit button
    verificationLogoutLink(){
        return cy.xpath('//a[@class="ico-logout"]')
    }
}

//Create Instance for class object
const registerResult =new demoshopRegisterResult()


//Custom Command for demoshop Register conformation message
Cypress.Commands.add("demoshopRegisterConformationMessage",()=>{
    //verify the url
    cy.url().should('include','/registerresult/')
    //Verify the page title
    registerResult.verifyPageTitle().should('have.text','Register')
    //Verify the Registration message completed
    registerResult.verifyRegisterMessage.should('have.text',trim('Your registration completed'))
    //Click on continue button
    registerResult.clickOnContinueBUtton().click()
    //Verify on logout button 
    registerResult.verificationLogoutLink.should('be.visible')

})

//Export the page objects
export default demoshopRegisterResult
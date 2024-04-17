//Create Register Page elements
class demoshopRegisterPageObjects{
    //Select the Gender radio button 
    selectGender(){
        return cy.xpath('(//input[@name="Gender"])[1]')
    }
    //Enter first Name
    enterFirstName(){
        return cy.xpath('//input[@id="FirstName"]')
    }
    //Enter last Name
    enterLastName(){
        return cy.xpath('//input[@id="LastName"]')
    }
    //Enter email
    enterMail(){
        return cy.xpath('//input[@id="Email"]')
    }
    //Enter Password
    enterPassword(){
        return cy.xpath('//input[@id="Password"]')
    }
    //Enter confirm Password
    enterConfirmPassword(){
        return cy.xpath('//input[@id="ConfirmPassword"]')
    }
    //Enter submit Button
    clickOnSubmitBUtton(){
        return cy.xpath('//input[@id="register-button"]')
    }
}

//Create Instance for class object
const registerPageObjects = new demoshopRegisterPageObjects()

//Custom Command for demoshop Register page
Cypress.Commands.add("demoshopUserRegistration",()=>{
    registerPageObjects.selectGender().check()
    registerPageObjects.enterFirstName().type('User')
    registerPageObjects.enterLastName().type('Testing')
    registerPageObjects.enterMail().type('usertesting1@gmail.com')
    registerPageObjects.enterPassword().type('123456')
    registerPageObjects.enterConfirmPassword().type('123456')
    registerPageObjects.clickOnSubmitBUtton().click()
})

//Export the page objects
export default demoshopRegisterPageObjects

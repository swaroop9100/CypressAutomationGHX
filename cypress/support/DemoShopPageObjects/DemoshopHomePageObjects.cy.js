//Adding all home page elements
class demoWebshopHomepageObjects {
    //Click on Register Link
    clickOnRegisterLink() {
        return cy.xpath('//a[@class="ico-register"]')
    }
    //Click on Login Link
    clickOnLoginLink() {
        return cy.xpath('//a[@class="ico-login"]')
    }
    //Click on Shopping cart Link
    clickOnShoppingcartLink() {
        return cy.xpath('(//span[@class="cart-label"])[1]')
    }
    //Click on Wishlist Link
    clickOnWishlistLink() {
        return cy.xpath('(//span[@class="cart-label"])[2]')
    }
    //Enter text on search store text box
    entertextInSearchBox() {
        return cy.xpath('//input[@id="small-searchterms"]')
    }
    //Click on search button after entering text into search box
    clickOnSearchButton() {
        return cy.xpath('//input[@type="submit"]')
    }
    //Click on books on Top Menu
    clickOnBooksTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Books']")
    }
    //Click on Computers on Top Menu
    clickOnComputersTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Computers']")
    }
    //Click on Electronics on Top Menu
    clickOnElectronicsTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Electronics']")
    }
    //Click on Apparel & Shoes on Top Menu
    clickOnApparelAndShoesTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Apparel & Shoes']")
    }
    //Click on Digital downloads on Top Menu
    clickOnDigitalDownloadsTopMenu() {
        return cy.xpath('//ul[@class="top-menu"]//a[normalize-space()="Digital downloads"]')
    }
    //Click on Jewelry on Top Menu
    clickOnJewelryTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Jewelry']")
    }
    //Click on Gift Cards on Top Menu
    clickOnGiftCardsTopMenu() {
        return cy.xpath("//ul[@class='top-menu']//a[normalize-space()='Gift Cards']")
    }
    //Enter Text on News Letters textbox 
    EnterTextInNewaLetter() {
        return cy.xpath('//input[@name="NewsletterEmail"]')
    }
    //Click on subscribe button for News Letter
    clickOnSubscribeButton() {
        return cy.xpath('//input[@id="newsletter-subscribe-button"]')
    }
    //Left side category Navigation click on Books
    clickOnBooksInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Books']")
    }
    //Left side category Navigation click on Computers
    clickOnComputersInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Computers']")
    }
    //Left side category Navigation click on Electronics
    clickOnElectronicsInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Electronics']")
    }
    //Left side category Navigation click on Apparel and Shoes
    clickOnApparelAndShoesInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Apparel & Shoes']")
    }
    //Left side category Navigation click on Digital downloads
    clickOnDigitalDownloadsInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Digital downloads']")
    }
    //Left side category Navigation click on Jewelry
    clickOnJewelryInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Jewelry']")
    }
    //Left side category Navigation click on Gift Cards
    clickOnGiftCardsInCategoryNavigation() {
        return cy.xpath("//li[@class='inactive']//a[normalize-space()='Gift Cards']")
    }
}

//Create Instance for class object
const shopwebHomePageObjects = new demoWebshopHomepageObjects()

//Creating Custom Commands
//Clicking on Register Link
Cypress.Commands.add("ClickRegisterLink", () => {
    shopwebHomePageObjects.clickOnRegisterLink().click()
})
//click on Login Link
Cypress.Commands.add("ClickLoginLink", () => {
    shopwebHomePageObjects.clickOnLoginLink().click()
})
//Click on Shopping Cart Link
Cypress.Commands.add("ClickShoppingcartLink", () => {
    shopwebHomePageObjects.clickOnShoppingcartLink().click()
})
//Click on wishlist Link
Cypress.Commands.add("clickOnWishlistLink", () => {
    shopwebHomePageObjects.clickOnWishlistLink().click()
})
//Enter text on search box and click on search button
Cypress.Commands.add("entertextInSearchBox", () => {
    shopwebHomePageObjects.entertextInSearchBox().type("computer")
    shopwebHomePageObjects.clickOnSearchButton().click()
})
//Click on Books top menu
Cypress.Commands.add("ClickBooksTopMenu",()=>{
    shopwebHomePageObjects.clickOnBooksTopMenu().click()
})
//Click on Computers top menu
Cypress.Commands.add("ClickComputersTopMenu",()=>{
    shopwebHomePageObjects.clickOnComputersTopMenu().click()
})
//Click on Electronics top menu
Cypress.Commands.add("ClickElectronicTopMenu",()=>{
    shopwebHomePageObjects.clickOnElectronicsTopMenu().click()
})
//Click on Apparel & Shoes on Top Menu
Cypress.Commands.add("ClickApparelAndShoesTopMenu",()=>{
    shopwebHomePageObjects.clickOnApparelAndShoesTopMenu().click()
})
//Click on Digital downloads on Top Menu
Cypress.Commands.add("ClickDigitalDownloadsTopMenu",()=>{
    shopwebHomePageObjects.clickOnDigitalDownloadsTopMenu().click()
})
//Click on Jewelry on Top Menu
Cypress.Commands.add("ClickJewelryTopMenu",()=>{
    shopwebHomePageObjects.clickOnJewelryTopMenu().click()
})
//Click on Gift Cards on Top Menu
Cypress.Commands.add("ClickGiftCardsTopMenu",()=>{
    shopwebHomePageObjects.clickOnGiftCardsTopMenu().click()
})
//Enter text on News Letter and subscribe button
Cypress.Commands.add("EnterNewsOnTextbox",()=>{
    shopwebHomePageObjects.EnterTextInNewaLetter().type("New news letter")
    shopwebHomePageObjects.clickOnSubscribeButton().click()
})
//Left side category Navigation click on Books

//Left side category Navigation click on Computers

//Left side category Navigation click on Electronics

//Left side category Navigation click on Apparel and Shoes

//Left side category Navigation click on Digital downloads

//Left side category Navigation click on Jewelry

//Left side category Navigation click on Gift Cards

//Export the page objects
export default demoWebshopHomepageObjects
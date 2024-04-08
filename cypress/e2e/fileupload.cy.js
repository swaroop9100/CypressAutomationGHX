///<reference types="cypress"/>

describe("fileupload", function () {
  // suppose specific test runs multiple times will write command Cypress._.times(1,()=>{ Inside write it block })
  Cypress._.times(2, () => {
    it("Testing file upload", () => {
      cy.visit("https://automationexercise.com/")
      cy.xpath('//a[text()=" Contact us"]').click()
      cy.url().should('contains', 'contact_us')
      cy.get(".title.text-center").eq(0).should("contain", 'Contact ')
      cy.get("input[name='name']").type('swaroop')
      cy.get("input[name='email']").type('swaroop9100@gmail.com')
      cy.get("input[name='subject']").type("I am doing testing2")
      cy.wait(2000)
      cy.get("#message").type("i am testing application file upload")
      cy.get("input[name='upload_file']").attachFile('Book2.xlsx')
      cy.get("input[type='submit']").click()

    })
  })


})
///<reference types="cypress"/>

describe("fileupload",function(){

  it("Testing file upload",()=>{
     cy.visit("https://automationexercise.com/")
     cy.xpath('//a[text()=" Contact us"]').click()
     cy.url().should('contain','contact_us')
     cy.get(".title.text-center").eq(0).should("contain",'Contact ')
     cy.get("input[name='name']").type('sanjusai')
     cy.get("input[name='email']").type('sanjusai477@gmail.com')
     cy.get("input[name='subject']").type("I am doing testing")
     cy.wait(2000)
     cy.get("#message").type("i am testing application file upload")
     cy.get("input[name='upload_file']").attachFile('Book2.xlsx')
     cy.get("input[type='submit']").click()
     
    })


})
describe("Handle Drop Doen",function(){
 it("Dropdown",function(){
    cy.visit("https://demowebshop.tricentis.com/")

   // cy.get('.header-menu >ul >li:nth-child(2)').click()
    cy.get('a[href="/computers"]').eq(0).click()
    cy.get(".picture").eq(1).click()
    //Select a value from dropdown
    cy.get('#products-orderby').select("Price: High to Low")

 })

})

        

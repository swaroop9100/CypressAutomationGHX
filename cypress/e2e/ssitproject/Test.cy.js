
describe("ssitproject",function(){

    //Hooks - Before executing every testcase this hook will execute
 beforeEach(function(){
    
     cy.fixture('DemoShop').then(function(rrr){
         this.rrr=rrr

         //Open URL
         cy.visit(this.rrr.url)
         //clicking on login button
         cy.get(".ico-login").click() 
         //enter email id
        /cy.get("#Email").type(this.rrr.email1)
         //enter password
        cy.get("#Password").type(this.rrr.password)
         //click on login button
         cy.get(".button-1.login-button").click()
      })
   })
 

 //Hooks- After executing every testcase this hook will execute
 afterEach(()=>{
    cy.log("After Each hook")
    //click on Logout button
    cy.get(".ico-logout").click()
    cy.log("After clicking logout button")
    //
    //cy.get("#topcartlink")
    //.should("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ")
    //.and("have.text","\n                \n                    Shopping cart\n                    (0)\n                \n            ")

 })

 // User Registration for MALE
 it.skip("User Registration",function(){
    
   
 })
 
 it("Verify User Login", function(){
   
 })
 it("Add items to cart",function(){
  
   
 })

 it("click on Shopping cart link on header",function(){

 })
 it("verify the shopping cart after adding items",function(){
 
   
 })
 it("checkout Functionality",function(){
   

 })
 
})
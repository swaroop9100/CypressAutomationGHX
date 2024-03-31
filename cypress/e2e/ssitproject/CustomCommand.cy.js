///<reference types="cypress"/>

describe("customcommands",function(){

    beforeEach(()=>{

        cy.fixture("DemoShop").then(function(data){
            this.data=data
               
        })


    })

    it("User Login",function(){
        cy.LoginUser(this.data.email,this.data.password)
    })

    it("Click on Logout",function(){
        cy.LoginUser(this.data.email,this.data.password)
        cy.wait(2000)
        cy.LogoutButton()

    })
})
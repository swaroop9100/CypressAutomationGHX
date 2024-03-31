describe("End2End",function(){

    it.only("Place order with new user",function(){

        /* User Regirtration */
        cy.visit("https://demowebshop.tricentis.com/")
        cy.wait(2000)
        cy.screenshot()

    })

    it.only("Place order with new user",function(){

        /* User Regirtration */
        cy.visit("https://demowebshop.tricentis/")
        cy.wait(2000)
        cy.screenshot()

    })
})
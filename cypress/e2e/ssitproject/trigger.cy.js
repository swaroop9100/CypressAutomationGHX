describe("End2End",function(){

    it("Place order with new user",function(){

        /* User Regirtration */
        cy.visit("https://demowebshop.tricentis.com/")
        cy.wait(2000)
        cy.screenshot()
        cy.get(".ico-wishlist").eq(0).trigger("mouseover")
        cy.wait(1000)
        //cy.get(".header-menu").find("Computers").trigger("mouseover")
        cy.get("a[href='/computers']").eq(0).trigger("mouseover")
        cy.wait(1000)
        cy.get('[href="/newproducts"]').scrollTo('bottom',{ensureScrollable: false})
        cy.get('[href="/newproducts"]').trigger("mousedown",'bottomLeft')
       cy.wait(1000)
       cy.get("[alt='Tricentis Demo Web Shop']").scrollTo('top',{ensureScrollable: false})
       cy.get("[alt='Tricentis Demo Web Shop']").trigger("mouseup",'left')
       

    })

    
})
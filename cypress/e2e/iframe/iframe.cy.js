describe("cypress iframe",()=>{
    it("cypress iframe handle",function(){
        //vist the site
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
        //getting the element
        cy.get('[name="globalSqa"]').then((iframe)=>{
           let iframebody = iframe.contents().find('[id="s"]').eq(2)
           cy.get('[id="s"]').scrollIntoView().type('cypress')
        })
    })
    //Method 1
    it.only("cypress iframe handle",function(){
        //vist the site
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
        //getting the element
        cy.get('[name="globalSqa"]').then((iframe)=>{
          let  iframebody = iframe.contents().find('#current_filter')

          cy.wrap(iframebody).scrollIntoView().click()
           
        })
    })
    //Method 2
    it.only("cypress iframe handle",function(){
        //vist the site
        cy.visit("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame")
        //getting the element
        cy.get('[name="globalSqa"]').its('0.contentDocument.body')
                                    .should('be.visible')
                                    .then((iframebody)=>{
                                        cy.wrap(iframebody).find('#mobile_menu_toggler').click()
                                    })    
        
    })
})

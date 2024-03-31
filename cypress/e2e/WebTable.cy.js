///<reference types="cypress"/>

//Create the Suite using the describe block
describe("Reading data from web table",()=>{
    beforeEach(()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

    })
    it.skip("reading any data from web table",()=>{
        //verifying the Learn Java is available in a table row or not
        cy.get("table >tbody >tr").contains("td","Learn Java").should("be.visible")
        //If have learn java table tada is avilable verify the price of learn java
        cy.get("table >tbody >tr:nth-child(3)").eq(0).each(($el,index)=>{
                           var data =$el.text()
                            cy.log(data)
                            if(data.includes('500')){
                                cy.get("table >tbody >tr:nth-child(3) >td:nth-child(4)").eq(index).should('not.have.length','4')
                            }
        })
    })

    it("Reading specific data from web table",()=>{

        cy.get("table >tbody >tr:nth-child(4)").eq(0).each(($el,index)=>{

            var text=$el.text()
            cy.log(text)
            if(text.includes('Javascript')){
                cy.get('table >tbody >tr td:nth-child(4)').eq(index).then((price)=>{
                     var text =price.text()
                     cy.log(text)
                     if(text==='300'){
                        expect(text).to.equal('300')
                        //expect(text.trim()).to.equal('300') 
                     }
                })
            }
        })
    })

})
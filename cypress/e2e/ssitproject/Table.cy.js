///<reference types ="cypress"/>

describe("Handle Webtables",function(){

    it("getting data from table",function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //Implicit assertion
        cy.get('table >tbody >tr').contains('td','Learn Java').should('have.text','Learn Java').and("have.length",'1')
    })

    it("getting table data",function(){
            cy.visit('https://testautomationpractice.blogspot.com/')
                //Explicit Assertion
                cy.get('table >tbody >tr:nth-child(3)').eq(0).each((el)=>{
                        var text =el.text()
                        cy.log(text)
                        if(text.includes('Learn Java')){

                            cy.get('table >tbody >tr >td:nth-child(4)').eq(1).then((price)=>{
                                    var t =price.text()
                                    expect(t).to.equal('500')
                            })
                        }
                })
    })



})
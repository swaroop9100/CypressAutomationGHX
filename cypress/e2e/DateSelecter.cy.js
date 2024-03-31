

describe("Calnder Handler", function () {

    beforeEach(function () {

        cy.fixture('Testdata').then(function (data) {
            this.data = data
            //Launch the website   
            cy.visit(this.data.dateurl)
            cy.viewport(1280, 720)

        })
    })

    it("Date Selector",function(){
        
        //cy.xpath("//input[@id='departure']").click()
        cy.get('input#departure').click()
        //cy.get('[style="display: block; top: 437px; left: 641.5px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(3)')
        cy.xpath("//tbody//tr/td[normalize-space(text()) and not(contains(@class,'day disabled'))]")
            .each(($el)=>{
                var datelist=$el.text()
                cy.log(datelist)
                if(datelist==='25'){
                    //cy.get('[style="display: block; top: 437px; left: 641.5px;"] > .datepicker-days > .table-condensed > tbody > :nth-child(3) > :nth-child(7)').click().should('have.class', 'day  active')
                    cy.wrap($el).click({force:true})
                }
            })
        

    })
    
  
    
})
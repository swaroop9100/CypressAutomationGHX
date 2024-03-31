// URL: Air India/ Goibibo

describe("Date Picker",function(){
    //cypress.on('uncaught:exception',(err, Runnable)=>{
    //    return false
    //})

    it("Calender Handle In Airindia",()=>{

        //cy.visit("https://www.airindia.com/")
        //cy.get('.btn.bi.bi-calendar3').eq(0).click()
        //cy.get('.ngb-dp-month.ng-star-inserted').eq(2)
       // .find('.custom-day.ng-star-inserted')
        //.find('.ngb-dp-day.ng-star-inserted')
        cy.visit("https://www.goibibo.com/")
        cy.get('.logSprite.icClose').click()
        cy.get('.sc-12foipm-16.wRKJm.fswFld ').eq(2).click()
        cy.get('.DayPicker-Month').eq(0)
        .find('.fsw__date')
        .each((e1)=>{
            const date=e1.text()
            cy.log(date)
            if(date=== '10')
            {
               cy.wrap(e1).click({force:true}) 
            }

            
        })
        cy.xpath('//span[text()="Done"]').click()
        cy.get('.sc-12foipm-64.dGRyPm').eq(1).click()
        cy.get('.sc-12foipm-64.dGRyPm').eq(3).click()
        //cy.get('.sc-12foipm-64.dGRyPm').eq(5).click()
        cy.get('.sc-12foipm-59.jfdntO').eq(0).click()
        //cy.get('.sc-12foipm-58.juWqGL').find('.sc-12foipm-59.jfdntO').eq(0).click()
        cy.get('.sc-12foipm-77.jYnAuG').click({force:true})
        cy.get('.sc-12foipm-0.hMZoCC').eq(2).check()

    
        /*cy.get('.lbl_input.appendBottom10').eq(2).click()
        cy.get('.DayPicker-Months').eq(0)
        .find('.dateInnerCell')
        .each((e1)=>{
                let date = e1.text()
                cy.log(date)
                cy.wait(1000)
                if(date==='15')
                {
                    cy.wrap(e1).click({force:true})
                } 

            })*/
    
    })
    
})
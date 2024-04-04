describe("suite1", function () {

    it("TC1", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
        cy.xpath('(//button[@class="btn btn-primary btn-lg"])[2]').click()
        cy.xpath('(//button[@class="btn btn-lg tab"])[2]').click()
        cy.xpath('//select[@id="userSelect"]').select(5)
        /* cy.xpath('//select[@id="userSelect"]').each((data)=>{
            var jdata=data.text()
            cy.log(jdata)
            if(jdata='Test User'){
                cy.wrap(data).select(5)
            }
        })  */
        cy.xpath('//select[@id="currency"]').select(3)
        cy.xpath('//button[@type="submit"]').click()

    })

})
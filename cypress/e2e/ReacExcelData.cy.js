describe("conversion to JSON",function(){

    it("Reading data from excel",function(){
        cy.parseXlsx("cypress/fixtures/exceldata.xlsx").then((jsonData)=>{
            
        
            const rowLength = Cypress.$(jsonData[0].data).length
            for(let index=0; index < rowLength; index++ )
            {
                var jsonData = jsonData[index].data
                console.log(jsonData[index].data)
                cy.writeFile("cypress/fixtures/xlsx.json",{username:jsonData[0][0], password:jsonData[0][1]})
            }
        })
    })
       
})

describe.skip("Reading data from josn file", ()=>{
    it("demo shop",function(){
        cy.visit("https://demowebshop.tricentis.com/")
        cy.fixture('xlsx').then(function(user){
            //enter email id
            cy.get("#Email").type(user.username)
            //enter password
            cy.get("#Password").type(user.password)
            //click on login button
            cy.get(".button-1.login-button").click()
        })
    })
})
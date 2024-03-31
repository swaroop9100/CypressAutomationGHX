describe("API Testing",function(){


    it("API Testing for Get BookingIDs",()=>{

       cy.request({

              method:"GET",
              url:"https://restful-booker.herokuapp.com/booking" 
        })
        .then((Response)=>{
             expect(Response.status).to.eq(200)
            })
    })


    it("API Testing for Get BookingIDs",()=>{

        cy.request({
 
            method:"GET",
            url:"https://restful-booker.herokuapp.com/booking" 
        }).its('status').should('equal',200)
    })

    it("API Testing getting booking details",()=>{

    cy.request("GET","https://restful-booker.herokuapp.com/booking/270").should((Response)=>{
        expect(Response.status).to.eq(200)

    })
  })




})
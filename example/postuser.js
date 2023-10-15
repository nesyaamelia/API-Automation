const { expect } = require("chai")
const request = require("supertest")



// Post Create User
describe("Create user in reqres" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://reqres.in")
        .post("/api/users")
        .send({
            "name": "morpheus",
            "job": "leader"
        })
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(201)
        expect(await response.body.name).to.include("morpheus")
    })
})
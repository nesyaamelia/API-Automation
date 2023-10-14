const { expect } = require("chai")
const request = require("supertest")

// PUT Ubah User
describe("Update user in reqres" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://reqres.in")
        .put("/api/users/2")
        .send({
            "name": "morpheus",
            "job": "zion resident"
        })
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(200)
    })
})
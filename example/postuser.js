const { expect } = require("chai")
const request = require("supertest")

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3YzFmZmE0LTAwNGUtNDA2MC05ZDViLTc0MDc2ODEzZDMyOCIsImNvbXBhbnlJZCI6IjNiYTg1YTk2LWNhY2ItNGUxNy1hMGZjLWZkMDBmM2UwMzA3OCIsImlhdCI6MTY5NzAzMjk4Mn0.qzN-3nm9mTG5x4zzhdSnm5fywPbg6_MyJx1oWf6wee8'

// Post Create User
describe("Create user in reqres" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://reqres.in")
        .post("/api/users")
        .set({ "Authorization": `Bearer ${accessToken}` })
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
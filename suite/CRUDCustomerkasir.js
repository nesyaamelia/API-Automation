const { expect } = require("chai")
const request = require("supertest")
const user = require("../data/user.json")
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3YzFmZmE0LTAwNGUtNDA2MC05ZDViLTc0MDc2ODEzZDMyOCIsImNvbXBhbnlJZCI6IjNiYTg1YTk2LWNhY2ItNGUxNy1hMGZjLWZkMDBmM2UwMzA3OCIsImlhdCI6MTY5NzMxMTIyNH0.uMspCb82dS7PKqxN-v1YJDlMO5bKBHq1aphIaN5Efr8'

// Get All Customers Kasir Aja
describe("Get User" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/customers")
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})

// Create Customers Kasir Aja
describe("Create Customers" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/customers")
        .send(user)
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(201)
    })
})

// Update Customers Kasir Aja
describe("Update Customers" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .put("/customers/b28d0f2a-e448-40ae-947d-55f42bb52d5a")
        .send({
            "name": "Nesya",
            "phone": "089509034232",
            "address": "Jl. Bandoeng 1",
            "description": "Nesya Customer"
        })
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})

// Delete Customers Kasir Aja
describe("Update Customers" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .delete("/customers/b28d0f2a-e448-40ae-947d-55f42bb52d5a")
        .send({
            "name": "Nesya",
            "phone": "089509034232",
            "address": "Jl. Bandoeng 1",
            "description": "Nesya Customer"
        })
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})
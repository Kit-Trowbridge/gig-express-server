const app = require("./app");
const request = require("supertest");

describe("/gigs", () => {
    test("/GET, it responds with an object with gigs as the key and an array of gigs as the value" , async () => {
        const response = await request(app).get("http://localhost:3000/gigs");
        expect(response.body).toEqual();
        expect(response.status).toBe(200);
    })
})

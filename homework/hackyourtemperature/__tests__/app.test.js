import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe("POST /", () => {
  it("Quick test", () => {
    expect(1).toBe(1);
  });
});

describe("POST /weather", () => {
  it("CityName is OK", async () => {
    const city = "ISTANBUL";
    const response = await request.post("/weather").send({ cityName: city });
    expect(response.statusCode).toBe(200);
    
  });
  it('Request has not CityName ', async () => {
    const response = await request.post('/weather');
    expect(response.statusCode).toBe(400);
    expect(response.text).toContain('City is not found!');
  });
const request = require("supertest");
const app = require("../src/app"); // export app instead of listen()

describe("GET /", () => {
  it("should return success message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});

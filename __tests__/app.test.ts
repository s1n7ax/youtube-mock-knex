import request from "supertest";
import { app } from "../src/app";

describe("app", () => {
  test("should return the user 1", async () => {
    const res = await request(app).get("/user/1").expect(200);
    expect(res.body.id).toBe(1);
  });
});

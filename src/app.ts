import express, { Request, Response } from "express";
import { pg } from "../knex";

export const app = express();

app.get("/user/:id", async (req: Request, res: Response) => {
  const [user] = await pg.select("*").from("users").where("id", req.params.id);

  res.json(user);
});

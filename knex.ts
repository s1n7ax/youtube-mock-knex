import Knex from "knex";

export const pg = Knex({
  client: "postgres",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "admin",
    password: "admin",
    database: "organization",
  },
});

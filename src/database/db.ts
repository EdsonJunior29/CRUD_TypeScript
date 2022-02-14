// eslint-disable-next-line no-unused-vars
import { DataType, Sequelize } from "sequelize";

const db = new Sequelize(
  "process.env.DATABASE_NAME",
  "process.env.DATABASE_USER",
  process.env.DATABASE_PASS,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
    port: +"process.env.DATABASE_PORT",
  }
);

export { db };

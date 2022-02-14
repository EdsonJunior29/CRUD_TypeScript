// eslint-disable-next-line no-unused-vars
import { DataType, Sequelize } from "sequelize";

const db = new Sequelize("crud_typescript", "root", "senhaMySQL", {
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: +"process.env.DATABASE_PORT",
});

export { db };

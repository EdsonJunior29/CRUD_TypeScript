/* eslint-disable prettier/prettier */
import express, { json } from "express";
import { db } from "./database/db";
import { router } from "./router";

const app = express();

app.use(json());
app.use(router);

app.listen(3000, async () => {
   await db.sync();
 console.log(`Api ${process.env.PROJECT_NAME}!`);
});

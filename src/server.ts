/* eslint-disable prettier/prettier */
import express from "express";

const app = express();

app.listen(3000, () => {
 console.log(`Api ${process.env.PROJECT_NAME}!`);
});

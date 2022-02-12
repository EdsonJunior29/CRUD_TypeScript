import express from "express";
import userController from "./controllers/userController";

const router = express.Router();

router.post("/users", userController.create);

router.get("/users", userController.findAll);

router.get("/users/:userID", userController.findOne);

router.put("/users/:userID", userController.update);

router.delete("/users/:userID", userController.update);

export { router };

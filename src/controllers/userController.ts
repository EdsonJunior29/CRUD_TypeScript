/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../database/models/userModel";

class UserController {
  async findAll(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {}

  async create(req: Request, res: Response) {
    const { nome, email, idade } = req.body;
    const user = await UserModel.create({
      nome,
      email,
      idade,
    });
    return res.status(201).json();
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}
}

export default new UserController();

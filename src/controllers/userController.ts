/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
import { UserModel } from "../database/models/userModel";

class UserController {
  async findAll(req: Request, res: Response) {
    const users = await UserModel.findAll();
    return users.length > 0
      ? res.status(200).json(users)
      : res.status(404).send();
  }

  async findOne(req: Request, res: Response) {
    const { userId } = req.params;
    const user = await UserModel.findOne({
      where: {
        id: userId,
      },
    });
    return res.status(200).json(user);
  }

  async create(req: Request, res: Response) {
    const { nome, email, idade } = req.body;
    const user = await UserModel.create({
      nome,
      email,
      idade,
    });
    return user ? res.status(201).json(user) : res.status(404).send();
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params;
    const { nome, email, idade } = req.body;
    const user = await UserModel.update(req.body, {
      where: {
        id: userId,
      },
    });
    return res.status(200).json(user);
  }

  async delete(req: Request, res: Response) {
    const { userId } = req.params;
    await UserModel.destroy({
      where: {
        id: userId,
      },
    });
    return res.status(204).send();
  }
}

export default new UserController();

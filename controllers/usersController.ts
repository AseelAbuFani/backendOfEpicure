import { Request, Response } from "express";
import { UsersService } from "../services/users.service";

export class UsersController {
  public static async getUsers(req: Request, res: Response) {
    try {
      const service = new UsersService();
      const users = await service.getUsers();
      return res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }

  public static async register(req: Request, res: Response) {
    const args = req.body;
    const user = await UsersService.register(args);
    res.send(user);
  }

  public static async login(req: Request, res: Response) {
    const args = req.body;
    const user = await UsersService.login(args);
    res.send(user);
  }
}
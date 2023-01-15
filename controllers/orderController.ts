import { Request, Response } from "express";
import { OrderService } from "../services/order.service";

export class OrderController {
  public static async getOrder(req: Request, res: Response) {
    const service = new OrderService();
    const order = await service.getOrder();
    return res.send(order);
  }

  public static async createOrder(req: Request, res: Response) {
    const params = req.body;
    const service = new OrderService();
    const order = await service.createOrder(params);
    return res.send(order);
  }
}

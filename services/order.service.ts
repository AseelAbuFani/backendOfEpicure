import { OrderDal } from "../dal/order.dal";

export class OrderService {
  public async getOrder() {
    const dal = new OrderDal();
    const res = await dal.findAll();
    return res;
  }

  public async createOrder(order: any) {
    const dal = new OrderDal();
    const res = dal.createOrder(order);
    return res;
  }
}

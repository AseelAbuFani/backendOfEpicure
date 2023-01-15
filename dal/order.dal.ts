import Users from "../db/models/users";
import Order from "../db/models/order";

export class OrderDal {
  public async createOrder(order: any) {
    order = new Order({
      quantity: order.quantity,
      user: order.user,
      side:order.side,
      changes:order.changes,
    });

    const response = await Order.create(order);
    const result = await Users.findOne({ email: response.user }).updateOne({
      $push: { pendingOrder: response._id },
    });
    return response;
  }

  public findAll() {
    return Order.find();
  }
}

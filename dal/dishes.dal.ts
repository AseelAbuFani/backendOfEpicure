import Dishes from "../db/models/dishes";
import Restaurants from "../db/models/restaurants";

export class DishesDal {
  public async createDish(dish: any) {
    dish = new Dishes({
      name: dish.dishName,
      restaurant: dish.restaurantName,
      description:dish.dishDescription,
      image:dish.dishImage,
      signature:dish.dishSignature,
      price:dish.dishPrice,
      dishType:dish.dishType,
    });

    const response = await Dishes.create(dish);
    const result = await Restaurants.findOne({ name: response.restaurant }).updateOne({
      $push: { dishesRestaurant: response._id },
    });
    return response;
  }

  public findAll() {
    return Dishes.find();
  }
}

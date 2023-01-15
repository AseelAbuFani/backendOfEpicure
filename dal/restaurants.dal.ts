import Chefs from "../db/models/chefs";
import Restaurants from "../db/models/restaurants";

export class RestaurantsDal {
  public async createRestaurant(restaurant: any) {
    restaurant = new Restaurants({
      name: restaurant.restaurantName,
      chef: restaurant.chefName,
      image: restaurant.image,
      rating: restaurant.rating,
      yearOfEstablishmented: restaurant.yearOfEstablishmented,
      open: restaurant.open,
    });

    const response = await Restaurants.create(restaurant);
    const result = await Chefs.findOne({ name: response.chef }).updateOne({
      $push: { chefsRestaurants: response._id },
    });
    return response;
  }

  public findAll() {
    return Restaurants.find();
  }

}

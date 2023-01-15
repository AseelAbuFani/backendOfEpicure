import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    rating: {
      type: String,
      required: false,
    },
    yearOfEstablishmented: {
      type: Number,
      required: false,
    },
    dishesRestaurant: {
      type: Array,
      required: false,
    },
    open: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model("Restaurants", restaurantsSchema);

export default Restaurants;

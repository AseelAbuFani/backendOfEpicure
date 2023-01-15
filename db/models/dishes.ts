import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    restaurant: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    signature: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    dishType:{
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Dishes = mongoose.model("Dishes", dishesSchema);

export default Dishes;

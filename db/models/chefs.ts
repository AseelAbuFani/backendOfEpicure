import mongoose from "mongoose";

const chefsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: false,
    },
    chefImage: {
      type: String,
      required: false,
    },
    chefsRestaurants: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

export default Chefs;

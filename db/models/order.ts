import mongoose from "mongoose";
//Please don't check this model - it is still in treatment stage..
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    dish: {
      type: Array,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
    side: {
      type: String,
      required: false,
    },
    changes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;

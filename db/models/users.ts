import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pendingOrder: {
      type: Array,
      required: false,
    },
    orders: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", usersSchema);

export default User;

import mongoose from "mongoose";

const connectDb = 
async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect("mongodb://127.0.0.1/epicureDB");
};

export { connectDb };

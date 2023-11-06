import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
export const connectdb = async () => {
  try {
    await mongoose
      .connect(process.env.DB ?? "")
      .then(() => {
        console.log("Connected db....");
      })
      .catch((error) => {
        console.log(error, "Disconnected");
      });
  } catch (err) {
    console.log(err);
  }
};

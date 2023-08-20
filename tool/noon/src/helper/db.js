import mongoose from "mongoose";

export async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB, {
      dbName: "divyendraNext",
    });
    console.log("Db connected ---------------");
  } catch (error) {
    console.log(error);
  }
}

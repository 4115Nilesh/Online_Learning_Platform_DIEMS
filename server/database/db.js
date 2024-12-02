import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    console.log("Attempting to connect to the database...");
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};


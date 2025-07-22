import mongoose from "mongoose";

mongoose.set("strictQuery", false)

export const connectToMongoDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) throw new Error("MONGODB_URI not found in .env");

  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    throw err;
  }
};

// You can add other external API connections here in the future:
export const connectToExternalAPI = async () => {
  // e.g., await axios.get("https://some-api.com/auth");
};

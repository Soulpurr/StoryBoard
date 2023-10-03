import mongoose from "mongoose";

const MONGODB_URI = `${process.env.NEXT_PUBLIC_MONGO_URL}`;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// Connect to MongoDB using a single global connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Add event listeners for connection events
const db = mongoose.connection;

db.once("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

export default db;

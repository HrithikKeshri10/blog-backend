import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/auth.routes.js";
import postRoutes from "./src/routes/post.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.error("MongoDB connection error:", err);
  process.exit(1);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

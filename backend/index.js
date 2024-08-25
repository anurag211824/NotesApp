import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MONGODB ATLAS");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
// to get input as json
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

// Import routes
import authRouter from "./routes/auth.route.js";
import noteRouter from "./routes/note.route.js";
app.use("/api/auth", authRouter);
app.use("/api/note",noteRouter)


app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

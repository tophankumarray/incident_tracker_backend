import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import incidentRoutes from "./routes/incident.routes.js";

const app = express();

dotenv.config();
connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/incidents", incidentRoutes);

const PORT = process.env.PORT || 5700;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

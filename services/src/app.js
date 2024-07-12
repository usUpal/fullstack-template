import express from "express";
import path from "path";
import cors from "cors";

import healthRoutes from "./routes/healthRoutes.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", healthRoutes);
app.use("/api/v1", testRoutes);

export default app;

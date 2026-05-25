import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js  "
import authRoute from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();


const app = express();

app.use(cors());

app.use(express.json());

app.get(
  "/api/health",
  (req, res) => {
    res.json({
      status: "ok",
    });
  }
);

app.use(
  "/api/auth",
  authRoute
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
    "/api/profile",
    profileRoutes
);

app.use(
    "/api/categories",
    categoryRoutes
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on ${PORT}`
  );
});
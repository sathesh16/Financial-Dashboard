import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { me, } from "../controllers/userController.js";

const router = Router();

router.get(
  "/me",
  authMiddleware,
  me
);

export default router;
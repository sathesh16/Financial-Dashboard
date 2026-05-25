import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { getProfileDetails, updateProfileDetails, } from "../controllers/profileController.js";

const router = Router();

router.get(
    "/",
    authMiddleware,
    getProfileDetails
);

router.put(
    "/",
    authMiddleware,
    updateProfileDetails
);

export default router;
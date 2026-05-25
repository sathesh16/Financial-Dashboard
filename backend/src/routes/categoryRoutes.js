import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { listCategories, addCategory, removeCategory, } from "../controllers/categoryController.js";

const router = Router();

router.get(
    "/",
    authMiddleware,
    listCategories
);

router.post(
    "/",
    authMiddleware,
    addCategory
);

router.delete(
    "/:id",
    authMiddleware,
    removeCategory
);

export default router;
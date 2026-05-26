import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import { listTransactions, addTransaction, } from "../controllers/transactionController.js";

const router = Router();

router.get(
    "/",
    authMiddleware,
    listTransactions
);

router.post(
    "/",
    authMiddleware,
    addTransaction
);

export default router;
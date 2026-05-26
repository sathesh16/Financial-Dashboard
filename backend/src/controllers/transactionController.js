import { getTransactions, createTransaction, } from "../services/transactionService.js";

export async function listTransactions(req, res) {
    try {
        const transactions = await getTransactions(req.user.userId);

        return res.json({
            success: true,
            transactions,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function addTransaction(req, res) {
    try {
        const transaction = req.body;

        const profile = await createTransaction(
            req.user.userId,
            transaction
        );

        return res.json({
            success: true,
            profile,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
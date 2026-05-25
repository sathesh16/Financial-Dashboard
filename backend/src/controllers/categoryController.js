import { getCategories, createCategory, deleteCategory, } from "../services/categoryService.js";

export async function listCategories( req, res ) {
    try {
        const categories =
            await getCategories(
                req.user.userId
            );

        res.json({
            success: true,
            categories,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function addCategory( req, res ) {
    try {
        const { name } = req.body;

        const category =
            await createCategory(
                req.user.userId,
                name
            );

        res.status(201).json({
            success: true,
            category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export async function removeCategory(
    req,
    res
) {
    try {
        const category =
            await deleteCategory(
                req.user.userId,
                req.params.id
            );

        res.json({
            success: true,
            category,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}
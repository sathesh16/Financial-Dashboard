import pool from "../db/index.js";

export async function getCategories( userId ) {
    const result = await pool.query(
        `
        SELECT
            id,
            name
        FROM categories
        WHERE user_id = $1
        ORDER BY name
        `,
        [userId]
    );

    return result.rows;
}

export async function createCategory( userId, name ) {
    const result = await pool.query(
        `
        INSERT INTO categories
        (
            user_id,
            name
        )
        VALUES
        (
            $1,
            $2
        )
        RETURNING *
        `,
        [userId, name]
    );

    return result.rows[0];
}

export async function deleteCategory( userId, categoryId ) {
    const result = await pool.query(
        `
        DELETE FROM categories
        WHERE
            id = $1
        AND
            user_id = $2
        RETURNING *
        `,
        [
            categoryId,
            userId,
        ]
    );

    return result.rows[0];
}
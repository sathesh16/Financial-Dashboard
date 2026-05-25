import pool from "../db/index.js";

export async function getProfile(userId) {
    const result = await pool.query(
        `
        SELECT
            id,
            email,
            full_name,
            profile_image,
            created_at
        FROM users
        WHERE id = $1
        `,
        [userId]
    );

    return result.rows[0];
}

export async function updateProfile(
    userId,
    fullName
) {
    const result = await pool.query(
        `
        UPDATE users
        SET full_name = $1
        WHERE id = $2
        RETURNING
            id,
            email,
            full_name,
            profile_image
        `,
        [fullName, userId]
    );

    return result.rows[0];
}
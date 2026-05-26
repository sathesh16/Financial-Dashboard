import pool from "../db/index.js";

export async function getTransactions(userId) {
    const result = await pool.query(
        `
    SELECT
      t.id,
      t.title,
      t.amount,
      t.type,
      t.transaction_date,
      c.name AS category_name
    FROM transactions t
    LEFT JOIN categories c
      ON c.id = t.category_id
    WHERE t.user_id = $1
    ORDER BY
      t.transaction_date DESC,
      t.id DESC
    `,
        [userId]
    );

    return result.rows;
}

export async function createTransaction(userId, transaction) {
    const { category_id, title, amount, type, transaction_date, notes, } = transaction;

    const result = await pool.query(
        `
    INSERT INTO transactions
    (
      user_id,
      category_id,
      title,
      amount,
      type,
      transaction_date,
      notes
    )
    VALUES
    (
      $1,$2,$3,$4,$5,$6,$7
    )
    RETURNING *
    `,
        [
            userId,
            category_id,
            title,
            amount,
            type,
            transaction_date,
            notes,
        ]
    );

    return result.rows[0];
}
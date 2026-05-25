import bcrypt from "bcrypt";
import pool from "../db/index.js";

export async function registerUser(
    email,
    password
) {
    const existingUser =
        await pool.query(
            `
      SELECT *
      FROM users
      WHERE email = $1
      `,
            [email]
        );

    if (existingUser.rows.length) {
        throw new Error(
            "Email already exists"
        );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
        `
      INSERT INTO users
      (
        email,
        password_hash
      )
      VALUES
      (
        $1,
        $2
      )
      RETURNING id,email
      `,
        [
            email,
            passwordHash,
        ]
    );

    return result.rows[0];
}

export async function loginUser(email, password) {
    const result = await pool.query(
        `
      SELECT *
      FROM users
      WHERE email = $1
      `,
        [email]
    );

    const user = result.rows[0];

    if (!user) {
        throw new Error(
            "Invalid credentials"
        );
    }

    const isValid = await bcrypt.compare(
        password,
        user.password_hash
    );

    if (!isValid) {
        throw new Error(
            "Invalid credentials"
        );
    }

    return user;
}
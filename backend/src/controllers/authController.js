import { registerUser, loginUser, } from "../services/authService.js";

import { generateToken, } from "../utils/jwt.js";

export async function register(req, res) {
    try {
        const { email, password, } = req.body;

        const user = await registerUser(email, password);

        const token = generateToken(user);

        return res.status(201).json({
            success: true,
            user,
            token,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export async function login(req, res) {
    try {
        const { email, password, } = req.body;

        const user = await loginUser(email, password);

        const token = generateToken(user);

        return res.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}
import { getProfile, updateProfile, } from "../services/profileService.js";

export async function getProfileDetails(req, res) {
    try {
        const profile = await getProfile(req.user.userId);

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

export async function updateProfileDetails(req, res) {
    try {
        const { full_name } = req.body;

        const profile = await updateProfile(
            req.user.userId,
            full_name
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
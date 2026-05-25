import { apiFetch } from "./api";

export function getProfile() {
    return apiFetch("/profile");
}

export function updateProfile(
    full_name
) {
    return apiFetch("/profile", {
        method: "PUT",
        body: JSON.stringify({
            full_name,
        }),
    });
}
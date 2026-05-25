import { apiFetch } from "./api";

export function getCategories() {
    return apiFetch("/categories");
}

export function createCategory(name) {
    return apiFetch(
        "/categories",
        {
            method: "POST",
            body: JSON.stringify({
                name,
            }),
        }
    );
}

export function deleteCategory(id) {
    return apiFetch(
        `/categories/${id}`,
        {
            method: "DELETE",
        }
    );
}
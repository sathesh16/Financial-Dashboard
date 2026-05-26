import { useEffect, useState, } from "react";

import { getCategories, createCategory, deleteCategory, } from "@/services/categoryService";

export default function CategorySettings() {
    const [categories, setCategories] = useState([]);

    const [name, setName] = useState("");

    async function loadCategories() {
        const data = await getCategories();

        setCategories(data.categories);
    }

    useEffect(() => {
        loadCategories();
    }, []);

    async function handleAdd() {
        if (!name.trim()) {
            return;
        }

        await createCategory(name);

        setName("");

        loadCategories();
    }

    async function handleDelete(id) {
        await deleteCategory(id);

        loadCategories();
    }

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                <input
                    value={name}
                    onChange={(e) =>
                        setName(
                            e.target.value
                        )
                    }
                    placeholder="Category Name"
                />

                <button
                    onClick={handleAdd}
                >
                    Add
                </button>
            </div>

            <ul>
                {categories.map(
                    (category) => (
                        <li
                            key={category.id}
                            className="flex justify-between"
                        >
                            <span>
                                {category.name}
                            </span>

                            <button
                                onClick={() =>
                                    handleDelete(
                                        category.id
                                    )
                                }
                            >
                                Delete
                            </button>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
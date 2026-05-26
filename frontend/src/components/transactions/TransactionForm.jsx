import { useState } from "react";

export default function TransactionForm({
  categories,
  onSubmit,
}) {
  const [formData, setFormData] =
    useState({
      title: "",
      amount: "",
      type: "expense",
      category_id: "",
      transaction_date:
        new Date()
          .toISOString()
          .split("T")[0],
      notes: "",
    });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit(formData);

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category_id: "",
      transaction_date:
        new Date()
          .toISOString()
          .split("T")[0],
      notes: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
      >
        <option value="income">
          Income
        </option>

        <option value="expense">
          Expense
        </option>
      </select>

      <select
        name="category_id"
        value={
          formData.category_id
        }
        onChange={handleChange}
      >
        <option value="">
          Select Category
        </option>

        {categories.map(
          (category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          )
        )}
      </select>

      <input
        type="date"
        name="transaction_date"
        value={
          formData.transaction_date
        }
        onChange={handleChange}
      />

      <textarea
        name="notes"
        placeholder="Notes"
        value={formData.notes}
        onChange={handleChange}
      />

      <button type="submit">
        Save Transaction
      </button>
    </form>
  );
}
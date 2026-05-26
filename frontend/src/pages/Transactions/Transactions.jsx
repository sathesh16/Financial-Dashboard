import { useEffect, useState } from "react";

import TransactionForm from "@/components/transactions/TransactionForm";
import TransactionTable from "@/components/transactions/TransactionTable";

import { getTransactions, createTransaction,} from "@/services/transactionsService";

import { getCategories, } from "@/services/categoryService";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const [
        transactionsData,
        categoriesData,
      ] = await Promise.all([
        getTransactions(),
        getCategories(),
      ]);
      setTransactions(transactionsData.transactions);

      setCategories(categoriesData.categories);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleCreate(
    formData
  ) {
    await createTransaction(
      formData
    );

    await loadData();
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">
      <TransactionForm
        categories={categories}
        onSubmit={handleCreate}
      />

      <TransactionTable
        transactions={transactions}
      />
    </div>
  );
}
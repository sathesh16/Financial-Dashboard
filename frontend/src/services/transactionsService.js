import { apiFetch } from "./api";

export function getTransactions() {
  return apiFetch("/transactions");
}

export function createTransaction(
  transaction
) {
  return apiFetch(
    "/transactions",
    {
      method: "POST",
      body: JSON.stringify(
        transaction
      ),
    }
  );
}
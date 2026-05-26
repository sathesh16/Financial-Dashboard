import TransactionRow from "./TransactionRow";

export default function TransactionTable({ transactions, }) {
  if (!transactions.length) {
    return (
      <p>
        No transactions found.
      </p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(
          (transaction) => (
            <TransactionRow
              key={transaction.id}
              transaction={
                transaction
              }
            />
          )
        )}
      </tbody>
    </table>
  );
}
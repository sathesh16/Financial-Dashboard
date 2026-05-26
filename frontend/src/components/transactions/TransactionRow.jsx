export default function TransactionRow({
  transaction,
}) {
  return (
    <tr>
      <td>
        {transaction.title}
      </td>

      <td>
        {
          transaction.category_name
        }
      </td>

      <td>
        {transaction.type}
      </td>

      <td>
        ₹
        {Number(
          transaction.amount
        ).toLocaleString()}
      </td>

      <td>
        {
          transaction.transaction_date
        }
      </td>
    </tr>
  );
}
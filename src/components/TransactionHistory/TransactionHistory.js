import Transaction from './Transaction';
import {
  TransactionHistoryTable,
  TransactionHead,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <TransactionHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionHead>

      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          ></Transaction>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

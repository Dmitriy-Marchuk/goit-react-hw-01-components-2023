import { TransactionItem } from './Transaction.styled';

export default function Transaction({ type, amount, currency }) {
  return (
    <TransactionItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionItem>
  );
}

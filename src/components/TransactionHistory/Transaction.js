import { TransactionItem } from './Transaction.styled';
import PropTypes from 'prop-types';

export default function Transaction({ type, amount, currency }) {
  return (
    <TransactionItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransactionItem>
  );
}

Transaction.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

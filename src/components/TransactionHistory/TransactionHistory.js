import Transaction from './Transaction';
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

import PropTypes from 'prop-types';
import { TransactionRow } from 'components/TransactionRow/TransactionRow';
import {
  TransactionTable,
  TableHead,
  TableCaption,
  TableRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableCaption>Type</TableCaption>
          <TableCaption>Amount</TableCaption>
          <TableCaption>Currency</TableCaption>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TransactionRow type={type} amount={amount} currency={currency} />
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

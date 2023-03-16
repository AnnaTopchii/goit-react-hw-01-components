import PropTypes from 'prop-types';
import { Text } from './TransactionRow.styled';

export const TransactionRow = ({ type, amount, currency }) => {
  return (
    <>
      <Text>{type}</Text>
      <Text>{amount}</Text>
      <Text>{currency}</Text>
    </>
  );
};

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

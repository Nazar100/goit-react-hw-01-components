import PropTypes from 'prop-types';
import Transaction from './Transaction/Transaction';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactioHistory}>
      <thead>
        <tr className={s.top}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(trans => {
          return (
            <tr className={s.column} key={trans.id}>
              <Transaction
                type={trans.type}
                amount={trans.amount}
                currency={trans.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

import PropTypes from 'prop-types';

const transationMarkup = ({ props }) => {
  return (
    props && (
      <div>
        <table className="transaction-history">
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>
          <tbody>
            {props.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.currency}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  );
};

transationMarkup.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default transationMarkup;

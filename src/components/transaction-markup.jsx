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
              const { id, type, amount, currency } = transaction;
              return (
                <tr key={id}>
                  <td>{type}</td>
                  <td>{amount}</td>
                  <td>{currency}</td>
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

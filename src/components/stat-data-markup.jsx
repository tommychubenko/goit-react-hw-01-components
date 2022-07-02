import PropTypes from 'prop-types';
import RandomColor from './randomColor';

const DataMarkup = ({ label, percentage }) => {
  return (
    <li className="item" style={{ backgroundColor: RandomColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

DataMarkup.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default DataMarkup;

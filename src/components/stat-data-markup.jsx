import PropTypes from 'prop-types';

const DataMarkup = ({ props }) => {
  const RandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    props && (
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {props.map(data => {
            return (
              <li
                key={data.id}
                className="item"
                style={{ backgroundColor: RandomHexColor() }}
              >
                <span className="label">{data.label}</span>
                <span className="percentage">{data.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
};

DataMarkup.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default DataMarkup;

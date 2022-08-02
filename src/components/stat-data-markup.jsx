import PropTypes from 'prop-types';

const DataMarkup = ({ props, title }) => {
  const RandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    props && (
      <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
          {props.map(data => {
            const { label, percentage, id } = data;
            return (
              <li
                key={id}
                className="item"
                style={{ backgroundColor: RandomHexColor() }}
              >
                <span className="label">{label}</span>
                <span className="percentage">{percentage}%</span>
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

import PropTypes from 'prop-types';

const friendsMarkup = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status">{isOnline ? '🟢Online' : '🔴Offline'}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

friendsMarkup.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default friendsMarkup;

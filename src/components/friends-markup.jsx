import PropTypes from 'prop-types';

const friendsMarkup = ({ props }) => {
  return (
    props && (
      <ul className="friend-list">
        {props.map(friend => {
          const { id, isOnline, avatar, name } = friend;
          return (
            <li className="item" key={id}>
              <span className="status">
                {isOnline ? '🟢Online' : '🔴Offline'}
              </span>
              <img
                className="avatar"
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{name}</p>
            </li>
          );
        })}
      </ul>
    )
  );
};

friendsMarkup.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default friendsMarkup;

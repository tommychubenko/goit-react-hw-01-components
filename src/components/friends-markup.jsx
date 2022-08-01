import PropTypes from 'prop-types';

const friendsMarkup = ({ props }) => {
  return (
    props && (
      <ul className="friend-list">
        {props.map(friend => {
          return (
            <li className="item" key={friend.id}>
              <span className="status">
                {friend.isOnline ? '🟢Online' : '🔴Offline'}
              </span>
              <img
                className="avatar"
                src={friend.avatar}
                alt="User avatar"
                width="48"
              />
              <p className="name">{friend.name}</p>
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

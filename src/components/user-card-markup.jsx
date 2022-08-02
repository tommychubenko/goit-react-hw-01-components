import PropTypes from 'prop-types';

const SocialNetworkMarkup = ({ props }) => {
  const { avatar, username, location, tag } = props;
  const { followers, views, likes } = props.stats;
  return (
    props && (
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">@{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    )
  );
};

SocialNetworkMarkup.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.object,
};

export default SocialNetworkMarkup;

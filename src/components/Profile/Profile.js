import propTypes from "prop-types";
import s from './Profile.module.css'
const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          src={avatar}
          className={s.avatar}
        />
        <p className={s.username}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.object.isRequired,
}

export default Profile
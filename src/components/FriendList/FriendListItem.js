import propTypes from 'prop-types'
import s from './FriendList.module.css'

const FriendListItem = ({ friend }) => {
  return (
    < li className={s.item} >
      <span className={s.status} style={
        friend.isOnline ? {
          backgroundColor: `green`,
          boxShadow: `0 0 20px green`
        } :
          {
            backgroundColor: `red`,
            boxShadow: `0 0 20px red`
          }

      }></span>
      <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
      <p className={s.name}>{friend.name}</p>
    </li>
  )
}


FriendListItem.propTypes = {
  friend: propTypes.object.isRequired
}

export default FriendListItem;

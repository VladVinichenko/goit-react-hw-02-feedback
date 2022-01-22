import propTypes from 'prop-types'
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))
      }
    </ul >
  )
}

FriendList.propTypes = {
  friends: propTypes.array,
}



export default FriendList
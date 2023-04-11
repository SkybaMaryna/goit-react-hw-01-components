import PropTypes from "prop-types";
import FriendListItem from '../friendListItem/FriendListItem'
import {StyledFriends} from './FriendList.styled'

const FriendList = ({friends}) => (
    <StyledFriends>
        {friends.map(({id, avatar, name, isOnline}) => (
            <FriendListItem
            key={id}
            avatar = {avatar}
            name = {name}
            isOnline = {isOnline}
        />
        ))}
    </StyledFriends>
)

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )
}

export default FriendList;
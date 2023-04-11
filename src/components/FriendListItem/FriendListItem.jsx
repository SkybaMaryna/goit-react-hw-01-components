import PropTypes from "prop-types";
import { StyledFriendCard, StyledFriendStatus, StyledFriendImg, StyledFriendName } from "../Profile/FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline}) => (
<StyledFriendCard>
  <StyledFriendStatus online={isOnline}></StyledFriendStatus>
  <StyledFriendImg src={avatar} alt="User avatar" width="48" />
  <StyledFriendName>{name}</StyledFriendName>
</StyledFriendCard>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
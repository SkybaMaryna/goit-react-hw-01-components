import PropTypes from "prop-types";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline}) => (
<li className="item">
  <span className={clsx("status", isOnline ? "onLine" : "offLine")}></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}

export default FriendListItem;
import PropTypes from "prop-types";
import {StyledProfileCard, StyledUserDescription, StyledUserAvatar, StyledUserName, StyledUserTag, StyledUserLocation, StyledStatsList, StyledStatsLabel, StyledStatsQuantity} from './Profile.styled'

 export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
    <StyledProfileCard>
  <StyledUserDescription>
    <StyledUserAvatar
      src={avatar}
      alt={username}
    />
    <StyledUserName>{username}</StyledUserName>
    <StyledUserTag>@{tag}</StyledUserTag>
    <StyledUserLocation>{location}</StyledUserLocation>
  </StyledUserDescription>

  <StyledStatsList>
    <li>
      <StyledStatsLabel>Followers</StyledStatsLabel><br/>
      <StyledStatsQuantity>{followers}</StyledStatsQuantity>
    </li>
    <li>
      <StyledStatsLabel>Views</StyledStatsLabel><br/>
      <StyledStatsQuantity>{views}</StyledStatsQuantity>
    </li>
    <li>
      <StyledStatsLabel>Likes</StyledStatsLabel><br/>
      <StyledStatsQuantity>{likes}</StyledStatsQuantity>
    </li>
  </StyledStatsList>
</StyledProfileCard>
)

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}

export default Profile;
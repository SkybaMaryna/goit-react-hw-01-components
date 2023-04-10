import PropTypes from "prop-types";
import {ProfileCard, UserDescription, UserAvatar, UserName, UserTag, UserLocation, StatsList, StatsLabel, StatsQuantity} from './Profile.styled'

const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => (
    <ProfileCard>
  <UserDescription>
    <UserAvatar
      src={avatar}
      alt={username}
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </UserDescription>

  <StatsList>
    <li>
      <StatsLabel>Followers</StatsLabel><br/>
      <StatsQuantity>{followers}</StatsQuantity>
    </li>
    <li>
      <StatsLabel>Views</StatsLabel><br/>
      <StatsQuantity>{views}</StatsQuantity>
    </li>
    <li>
      <StatsLabel>Likes</StatsLabel><br/>
      <StatsQuantity>{likes}</StatsQuantity>
    </li>
  </StatsList>
</ProfileCard>
)

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired
}

export default Profile;
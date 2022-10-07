import PropTypes from 'prop-types';
import { UserStatsContainer, StatList, Label, Quantity} from "./UserStats.styled";

export const UserStats = ({ profile: { stats } }) => {
    return (
        <UserStatsContainer >
    <StatList>
      <Label >Followers</Label>
      <Quantity >{stats.followers}</Quantity>
    </StatList>
    <StatList>
      <Label >Views</Label>
      <Quantity >{stats.views}</Quantity>
    </StatList>
    <StatList>
      <Label >Likes</Label>
      <Quantity >{stats.likes}</Quantity>
    </StatList>
  </UserStatsContainer>
    )
}


UserStats.propTypes = {
  profile: PropTypes.exact({
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  })
  }),
}
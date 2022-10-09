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
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
  }),
}
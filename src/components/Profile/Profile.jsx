import PropTypes from 'prop-types';
import { Container, Descr, UserAvatar, UserName, TagLocation } from './Profile.styled';
import { UserStats } from "../UserStats/UserStats";
import user from '../Profile/user.json';


export const Profile = ({ profile: { username, tag, avatar, location } }) => {
  return (
    <Container >
  <Descr >
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
        <UserName >{username}</UserName>
        <TagLocation >@{tag}</TagLocation>
    <TagLocation >{location}</TagLocation>
  </Descr>

      <UserStats profile={user}/>
</Container>
  );
};



Profile.propTypes = {
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
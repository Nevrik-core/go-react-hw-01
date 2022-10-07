import { FriendsListItem } from "../FriendsListItem/FriendsListItem";
export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
            {friends.map(el => (
                 <FriendsListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline} />
            ))};
        </ul>);
};
import { FriendsListItem } from "../FriendsListItem/FriendsListItem";
import { ListContainer } from "./FriendList.styled";
export const FriendList = ({friends}) => {
    return (
        <ListContainer >
            {friends.map(el => (
                 <FriendsListItem
                    key={el.id}
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline} />
            ))};
        </ListContainer>);
};

import React, { FC, useEffect, useState } from 'react';
import s from './FriendsList.module.scss';
import { SearchBar } from '../SearchBar';
import { UserFindCard } from '../UserFindCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getUserById } from '../../redux/slices/userSlice';
import { IUser } from '../../models/IUser';

interface FriendsListProps { }

export const FriendsList: FC<FriendsListProps> = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authSlice);

  const [searchQuery, setSearchQuery] = useState('');
  const [friends, setFriends] = React.useState<IUser[]>([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        if (user?.friends) {
          const friendsData = await Promise.all(
            user.friends.map(async (friendId: string) => {
              const friends = await dispatch(getUserById(friendId));
              return friends.payload;
            })
          );

          setFriends(friendsData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchFriends();
  }, [user]);

  const searchInFriends = (searchQ: string) => {
    setSearchQuery(searchQ);
  };

  const filteredFriends = friends.filter((friend) =>
    friend.nickname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={s.friends_lists}>
      <div className={s.search_bar__wrapper}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => searchInFriends(e.target.value)}
          onSearch={searchInFriends}
        />
      </div>

      <div className={s.user_list__wrapper}>
        {filteredFriends.length > 0 &&
          filteredFriends.map((user: IUser, index) => (
            <UserFindCard key={index} user={user} onClick={() => { }} />
          ))}
      </div>
    </div>
  );
};

export default FriendsList;

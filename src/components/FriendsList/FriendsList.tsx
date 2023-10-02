import React, { FC } from 'react';
import s from './FriendsList.module.scss';
import { SearchBar } from '../SearchBar';
import { UserFindCard } from '../UserFindCard';

interface FriendsListProps { }

export const FriendsList: FC<FriendsListProps> = () => (
  <div className={s.friends_lists}>
    <div className={s.search_bar__wrapper}>
      <SearchBar />
    </div>

    <div className={s.user_list__wrapper}>
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
      <UserFindCard />
    </div>
  </div>
);

export default FriendsList;

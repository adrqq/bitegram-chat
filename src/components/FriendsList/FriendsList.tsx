import React, { FC } from 'react';
import s from './FriendsList.module.scss';
import { SearchBar } from '../SearchBar';

interface FriendsListProps { }

export const FriendsList: FC<FriendsListProps> = () => (
  <div className={s.friends_lists}>
    <div className={s.search_bar__wrapper}>
      <SearchBar />
    </div>
  </div>
);

export default FriendsList;

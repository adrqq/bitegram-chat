import React, { FC, useState } from 'react';
import s from './ExploreList.module.scss';
import { SearchBar } from '../SearchBar';
import { UserFindCard } from '../UserFindCard';
import { searchUsers } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

interface ExploreListProps { }

export const ExploreList: FC<ExploreListProps> = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authSlice);

  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  // const handleSearch = (searchQ: string) => {
  //   dispatch(searchUsers(searchQ)).then((res: any) => {
  //     setUsers(res.payload);
  //   });
  // };

  const handleSearch = (searchQ: string) => {
    if (user.id) {
      dispatch(searchUsers({ searchQuery: searchQ, userId: user.id }))
        .unwrap()
        .then((res) => {
          setUsers(res);
        })
        .catch((error) => {
          // Handle the error, e.g., show an error message or log it
          console.error('Search error:', error);
        });
    }
  };

  return (
    <div className={s.friends_lists}>
      <div className={s.search_bar__wrapper}>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <div className={s.user_list__wrapper}>
        {users.length > 0 &&
          users.map((user: any, index) => (
            <UserFindCard key={index} user={user} onClick={() => { }} />
          ))}
      </div>
    </div>
  );
}

export default ExploreList;

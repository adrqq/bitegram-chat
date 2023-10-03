import React, { FC, useState } from "react";
import s from "./FriendsList.module.scss";
import { SearchBar } from "../SearchBar";
import { UserFindCard } from "../UserFindCard";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { searchUsers } from "../../redux/slices/userSlice";

interface FriendsListProps {}

export const FriendsList: FC<FriendsListProps> = () => {
  const dispatch = useAppDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSearch = (searchQ: string) => {
    dispatch(searchUsers(searchQ)).then((res: any) => {
      setUsers(res.payload);
    });
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
          users.map((user: any) => (
            <UserFindCard
              key={user._id}
              user={user}
              // onClick={() => {
              //   setSearchQuery("");
              //   setUsers([]);
              // }}
            />
          ))}
      </div>
    </div>
  );
};

export default FriendsList;

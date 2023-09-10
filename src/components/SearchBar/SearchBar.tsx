import React, { FC } from 'react';
import s from './SearchBar.module.scss';

interface SearchBarProps { }

export const SearchBar: FC<SearchBarProps> = () => (
  <div className={s.search_bar}>
    <input
      type="text"
      placeholder="Search"
      className={s.search_bar__input}
    />
  </div>
);

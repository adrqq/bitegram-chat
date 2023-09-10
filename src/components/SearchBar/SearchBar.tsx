import React, { FC } from 'react';
import s from './SearchBar.module.scss';

import searchIcon from '../../images/blue-search-icon.svg';
import funnelIcon from '../../images/funnel-icon.svg';

interface SearchBarProps { }

export const SearchBar: FC<SearchBarProps> = () => (
  <div className={s.search_bar}>
    <label htmlFor="search" className={s.search_bar__search_icon}>
      <img src={searchIcon} alt="search" />
    </label>
    <input
      type="text"
      placeholder="Search"
      className={s.search_bar__input}
      id='search'
    />
    <label htmlFor="search" className={s.search_bar__funnel_icon}>
      <img src={funnelIcon} alt="filter-select" />
    </label>
  </div>
);

import React, { FC } from 'react';
import s from './SearchBar.module.scss';

import searchIcon from '../../images/blue-search-icon.svg';
import funnelIcon from '../../images/funnel-icon.svg';

interface SearchBarProps { }

export const SearchBar: FC<SearchBarProps> = () => (
  <div className={s.search_bar}>
    <label htmlFor="search" className={s.search_bar__search_icon}>
      <button
        className={s.search_bar__button}
        type="button"
      >
        <img src={searchIcon} alt="search" />
      </button>
    </label>
    <input
      type="text"
      placeholder="Search"
      className={s.search_bar__input}
      id="search"
    />
    <button className={s.search_bar__funnel_icon}>
      <img src={funnelIcon} alt="filter-select" />
    </button>
  </div>
);

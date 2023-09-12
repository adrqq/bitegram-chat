import React, { FC, useRef, HTMLInputTypeAttribute } from 'react';
import s from './SearchBar.module.scss';

import searchIcon from '../../images/blue-search-icon.svg';
import funnelIcon from '../../images/funnel-icon.svg';

interface SearchBarProps { }

export const SearchBar: FC<SearchBarProps> = () => {
  const inputRef = useRef(null);

  const handleSearchIconClick = () => {
    const inputElement: any = inputRef.current;

    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className={s.search_bar}>
      <button
        className={s.search_bar__search_button}
        type="button"
        onClick={handleSearchIconClick}
        ref={inputRef}
      >
        <img
          className={s.search_bar__search_icon}
          src={searchIcon}
          alt="search"
        />
      </button>
      <input
        type="text"
        placeholder="Search"
        className={s.search_bar__input}
        id="search"
        name="search"
        ref={inputRef}
      />
      <button className={s.search_bar__funnel_icon}>
        <img src={funnelIcon} alt="filter-select" />
      </button>
    </div>
  );
}

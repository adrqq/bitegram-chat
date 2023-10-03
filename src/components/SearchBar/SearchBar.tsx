import React, { FC, useRef, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import s from './SearchBar.module.scss';

import searchIcon from '../../images/blue-search-icon.svg';
import funnelIcon from '../../images/funnel-icon.svg';

interface SearchBarProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  value = '',
  onChange = () => {},
  placeholder = 'Search',
  type = 'text',
  name = 'search',
  onSearch = () => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState(value);

  const handleSearchIconClick = () => {
    const inputElement = inputRef.current;

    if (inputElement) {
      inputElement.focus();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // useEffect(() => {
  //   // Call the onSearch function after a 1-second timeout when the value changes
  //   const timeoutId = setTimeout(() => {
  //     onSearch(searchQuery);
  //   }, 1000);

  //   return () => {
  //     // Clear the timeout when the component unmounts or when the value changes
  //     clearTimeout(timeoutId);
  //   };
  // }, [searchQuery, onSearch]);

  const handleInputBlur = () => {
    // Call onSearch immediately when the input loses focus
    onSearch(searchQuery);
  };

  return (
    <div className={s.search_bar}>
      <button
        className={s.search_bar__search_button}
        type="button"
        onClick={handleSearchIconClick}
      >
        <img
          className={s.search_bar__search_icon}
          src={searchIcon}
          alt="search"
        />
      </button>
      <input
        value={searchQuery}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        type={type}
        placeholder={placeholder}
        className={s.search_bar__input}
        id={name}
        name={name}
        ref={inputRef}
      />
      <button className={s.search_bar__funnel_icon}>
        <img src={funnelIcon} alt="filter-select" />
      </button>
    </div>
  );
};

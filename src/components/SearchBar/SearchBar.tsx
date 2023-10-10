import React, { FC, useRef, HTMLInputTypeAttribute, useEffect, useState, KeyboardEvent } from 'react';
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

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Call onSearch when Enter key is pressed
      onSearch(searchQuery);
    }
  };

  useEffect(() => {
    // Clear the previous timeout when the input changes
    let timeoutId: NodeJS.Timeout | null = null;

    // Create a new timeout for the current searchQuery
    if (searchQuery !== '') {
      timeoutId = setTimeout(() => {
        onSearch(searchQuery);
      }, 1000);
    }

    return () => {
      // Clear the previous timeout when the component unmounts or when the value changes
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [searchQuery]);

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
        onKeyDown={handleInputKeyDown}
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

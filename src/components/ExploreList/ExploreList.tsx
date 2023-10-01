import React, { FC } from 'react';
import s from './ExploreList.module.scss';
import { SearchBar } from '../SearchBar';

interface ExploreListProps { }

export const ExploreList: FC<ExploreListProps> = () => (
  <div className={s.explore_list}>
    <div className={s.search_bar__wrapper}>
      <SearchBar />
    </div>
  </div>
);

export default ExploreList;

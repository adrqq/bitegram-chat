import { FC } from 'react';
import s from './SelectorBlock.module.scss';
import { SearchBar } from '../SearchBar/';

import dashedCircleIcon from '../../images/dashed-circle.svg'

interface Props {
}

export const SelectorBlock: FC<Props> = () => {

  return (
    <div className={s.selector_block}>
      <div className={s.selector_block__head}>
        <h1 className={s.selector_block__head__title}>
          Chats
        </h1>

        <img src={dashedCircleIcon} alt="dashed-circle" />
      </div>

      <div className={s.selector_block__search_bar}>
        <SearchBar />
      </div>
    </div>
  )
}
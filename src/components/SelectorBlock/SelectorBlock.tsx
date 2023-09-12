import { FC } from 'react';
import s from './SelectorBlock.module.scss';
import { SearchBar } from '../SearchBar/';
import { ChatItem } from '../ChatItem'

import dashedCircleIcon from '../../images/dashed-circle.svg'
import { ArchivedBar } from '../ArchivedBar/ArchivedBar';

interface Props {
}

export const SelectorBlock: FC<Props> = () => {

  return (
    <div className={s.selector_block}>
      <div className={s.selector_block__sticky}>
        <div className={s.selector_block__head}>
          <h1 className={s.selector_block__head__title}>
            Chats
          </h1>

          <img
            src={dashedCircleIcon}
            alt="dashed-circle"
            className={s.selector_block__head__dashed_circle}
          />
        </div>

        <div className={s.selector_block__search_bar}>
          <SearchBar />
        </div>

        <div className={s.selector_block__archive_bar}>
          <ArchivedBar />
        </div>

        <div className={s.selector_block__border} />
      </div>

      <div className={s.selector_block__pinned}>
        <h2 className={s.selector_block__subtitle}>
          Pinned
        </h2>
      </div>

      <ul className={s.chats_list}>
        <ChatItem />
        <ChatItem />
      </ul>

      <div className={s.selector_block__all}>
        <h2 className={s.selector_block__subtitle}>
          All Chats
        </h2>
      </div>

      <ul className={s.chats_list}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ul>
    </div>
  )
}
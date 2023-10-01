import { FC, useState } from "react";
import s from "./SelectorBlock.module.scss";
import { SearchBar } from "../SearchBar/";
import { ChatItem } from "../ChatItem";

import { ArchivedBar } from "../ArchivedBar/ArchivedBar";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

import dashedCircleIcon from "../../images/dashed-circle.svg";
import peopleIcon from "../../images/people-dimmed-icon.svg";
import Modal from "../../UI/Modal/Modal";
import classNames from "classnames";
import { setIsFindModalOpen } from "../../redux/slices/rootSlice";

interface Props { }

export const SelectorBlock: FC<Props> = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={s.selector_block}>
        <div className={s.selector_block__sticky}>
          <div className={s.selector_block__head}>
            <h1 className={s.selector_block__head__title}>Chats</h1>

            <div className={s.selector_block__head__buttons_wrapper}>
              <button className={s.selector_block__head__button}
                onClick={() => {
                  dispatch(setIsFindModalOpen(true));
                }}
              >
                <img
                  src={peopleIcon}
                  alt="dashed-circle"
                  className={s.selector_block__head__button__icon}
                />
              </button>

              <button className={s.selector_block__head__button}>
                <img
                  src={dashedCircleIcon}
                  alt="dashed-circle"
                  className={s.selector_block__head__button__icon}
                />
              </button>
            </div>
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
          <h2 className={s.selector_block__subtitle}>Pinned</h2>
        </div>

        <ul className={s.chats_list}>
          <ChatItem />
          <ChatItem />
        </ul>

        <div className={s.selector_block__all}>
          <h2 className={s.selector_block__subtitle}>All Chats</h2>
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
    </>
  );
};

import React, { FC, useState } from 'react';
import s from './FindModal.module.scss';
import classNames from 'classnames';
import { SearchBar } from '../SearchBar';
import { FriendsList } from '../FriendsList';
import { ExploreList } from '../ExploreList';
import RequestsList from '../RequestsList/RequestsList';

interface FindModalProps { }

enum Tabs {
  EXPLORE = "Explore",
  FRIENDS = "Friends",
  REQUEST = "Request",
}

export const FindModal: FC<FindModalProps> = () => {
  const [activeTab, setActiveTab] = useState(Tabs.EXPLORE);

  return (
    <div className={s.modal}>
      <div className={s.modal__routes}>
        <button
          onClick={() => setActiveTab(Tabs.EXPLORE)}
          className={classNames(
            s.modal__button,
            [activeTab === Tabs.EXPLORE ? s.modal__button__active : ""]
          )}
        >
          <p className={s.modal__button__text}>
            Explore
          </p>
        </button>

        <button
          onClick={() => setActiveTab(Tabs.FRIENDS)}
          className={classNames(
            s.modal__button,
            [activeTab === Tabs.FRIENDS ? s.modal__button__active : ""]
          )}
        >
          <p className={s.modal__button__text}>
            Friends
          </p>
        </button>

        <button
          onClick={() => setActiveTab(Tabs.REQUEST)}
          className={classNames(
            s.modal__button,
            [activeTab === Tabs.REQUEST ? s.modal__button__active : ""]
          )}
        >
          <p className={s.modal__button__text}>
            Requests
          </p>
        </button>
      </div>

      <div className={s.modal__content}>
        {activeTab === Tabs.EXPLORE && (
          <ExploreList />
        )}

        {activeTab === Tabs.FRIENDS && (
          <FriendsList />
        )}

        {activeTab === Tabs.REQUEST && (
          <div className={s.requests}>
            <RequestsList />
          </div>
        )}
      </div>
    </div>
  );
};

export default FindModal;

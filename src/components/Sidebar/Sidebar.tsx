import React, { FC, useRef, useState } from 'react';
import s from './Sidebar.module.scss';
import classNames from 'classnames';
import { NavLink, useNavigate } from "react-router-dom";
import { LinksModal } from '../../UI/LinksModal';

import testAvatar from '../../images/avatar.svg';
import settingsIcon from '../../images/black-settings-logo.svg'
import usersIcon from '../../images/black-users-logo.svg'
import signoutIcon from '../../images/sign-out-logo-black.svg'
import { useAppDispatch } from '../../hooks/redux';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const [isLinksModalOpen, setIsLinksModalOpen] = useState(false);
  const navigate = useNavigate();
  const ignoreButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__functional}>
        <div className={s.sidebar__logo}>
          <div className={s.sidebar__logo_icon} />
        </div>

        <NavLink
          to="app/chats"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__chat,
              isActive && s.sidebar__chat__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />

        <NavLink
          to="app/groups"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__users,
              isActive && s.sidebar__users__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />

        <NavLink
          to="app/calls"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__calls,
              isActive && s.sidebar__calls__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />

        <div className={s.black_line} />

        <NavLink
          to="app/settings"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__settings,
              isActive && s.sidebar__settings__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />
      </div>

      <div className={s.sidebar__info__wrapper}>
        <div className={s.sidebar__switch__wrapper}>
          <div className={s.sidebar__switch} />
        </div>

        <button
          className={s.avatar}
          onClick={() => setIsLinksModalOpen(!isLinksModalOpen)}
          ref={ignoreButtonRef}
        >
          <img src={testAvatar} alt="avatar" />
        </button>

        {isLinksModalOpen && (
          <div className={s.links_modal_wrapper}>
            <LinksModal
              linksData={[
                {
                  text: 'Profile',
                  icon: usersIcon,
                  to: "/app/user-profile",
                },
                {
                  text: 'Settings',
                  icon: settingsIcon,
                  to: "/app/settings",
                },
                {
                  text: 'Sign out',
                  icon: signoutIcon,
                  onClick: () => console.log('sign out'),
                },
              ]}
              closeModal={() => setIsLinksModalOpen(false)}
              ignoreButtonRef={ignoreButtonRef}
              width={'175px'}
              outerPadding={'15px'}
              linkGap={'10px'}
            />
          </div>
        )}
      </div>
    </div >
  );
};

export default Sidebar;

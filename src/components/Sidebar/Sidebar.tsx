import React, { FC } from 'react';
import s from './Sidebar.module.scss';
import { NavLink, useNavigate } from "react-router-dom";
import classNames from 'classnames';

const Sidebar: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__functional}>
        <div className={s.sidebar__logo}>
          <div className={s.sidebar__logo_icon} />
        </div>

        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__chat,
              isActive && s.sidebar__chat__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />

        <NavLink
          to="/groups"
          className={({ isActive, isPending }) =>
            classNames(s.sidebar__item,
              s.sidebar__users,
              isActive && s.sidebar__users__selected,
              isActive && s.sidebar__item__selected,
            )
          }
        />

        <NavLink
          to="/calls"
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
          to="/settings"
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

        <div className={s.sidebar__avatar} />
      </div>
    </div >
  );
};

export default Sidebar;

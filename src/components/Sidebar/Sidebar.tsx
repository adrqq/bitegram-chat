import React, { FC } from 'react';
import s from './Sidebar.module.scss';
import classNames from 'classnames';

const Sidebar: FC = () => {
  const selected = false;

  return (
    <div className={s.sidebar}>
      <div className={s.sidebar__functional}>
        <div className={s.sidebar__logo}>
          <div className={s.sidebar__logo_icon} />
        </div>

        <div
          className={classNames(
            s.sidebar__item,
            selected && s.sidebar__item__selected,
          )}
        >
          <div
            className={classNames(
              s.sidebar__chat,
              selected && s.sidebar__chat__selected,
            )}
          />
        </div>

        <div
          className={classNames(
            s.sidebar__item,
            selected && s.sidebar__item__selected,
          )}
        >
          <div
            className={classNames(
              s.sidebar__users,
              selected && s.sidebar__users__selected,
            )}
          />
        </div>

        <div
          className={classNames(
            s.sidebar__item,
            selected && s.sidebar__item__selected,
          )}
        >
          <div
            className={classNames(
              s.sidebar__calls,
              selected && s.sidebar__calls__selected,
            )}
          />
        </div>

        <div className={s.blackLine} />

        <div
          className={classNames(
            s.sidebar__item,
            selected && s.sidebar__settings__selected,
          )}
        >
          <div
            className={classNames(
              s.sidebar__settings,
              selected && s.sidebar__settings__selected,
            )}
          />
        </div>
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

import React from "react";
import "./Sidebar.scss";
import classNames from "classnames";

const Sidebar = () => {
  const selected = false;

  return (
    <div className="sidebar">
      <div className="sidebar__functional">
        <div className="sidebar__logo">
          <div className="sidebar__logo-icon" />
        </div>

        <div
          className={classNames("sidebar__item", {
            "sidebar__item--selected": selected,
          })}
        >
          <div
            className={classNames("sidebar__chat", {
              "sidebar__chat--selected": selected,
            })}
          />
        </div>

        <div
          className={classNames("sidebar__item", {
            "sidebar__item--selected": selected,
          })}
        >
          <div
            className={classNames("sidebar__users", {
              "sidebar__users--selected": selected,
            })}
          />
        </div>

        <div
          className={classNames("sidebar__item", {
            "sidebar__item--selected": selected,
          })}
        >
          <div
            className={classNames("sidebar__calls", {
              "sidebar__calls--selected": selected,
            })}
          />
        </div>

        <div className="black-line" />

        <div
          className={classNames("sidebar__item", {
            "sidebar__item--selected": selected,
          })}
        >
          <div
            className={classNames("sidebar__settings", {
              "sidebar__settings--selected": selected,
            })}
          />
        </div>
      </div>

      <div className="sidebar__info__wrapper">
        <div className="sidebar__switch__wrapper">
          <div className="sidebar__switch" />
        </div>

        <div className="sidebar__avatar" />
      </div>
    </div>
  );
};

export default Sidebar;

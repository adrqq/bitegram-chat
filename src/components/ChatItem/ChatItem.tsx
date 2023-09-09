import React from "react";
import "./ChatItem.scss";
import classNames from "classnames";


const ChatItem = () => {
  const selected = true;

  return (
    <button
      className={classNames("chat__container", {
        "chat__container--selected": selected,
        "chat__container--unselected": !selected,
      })}
    >
      <div className="chat_item">
        <div className="chat__info__wrapper">
          <img className="chat__avatar" />

          <div className="chat__info">
            <p
              className={classNames("chat__title", {
                "chat__title--selected": selected,
                "chat__title--unselected": !selected,
              })}
            >
              Pink Panda
            </p>

            <p
              className={classNames("chat__last__message", {
                "chat__last__message--selected": selected,
                "chat__last__message--unselected": !selected,
              })}
            >
              You: thnx!
            </p>
          </div>
        </div>

        <div
          className={classNames("chat__time", {
            "chat__time--selected": selected,
            "chat__time--unselected": !selected,
          })}
        >
          <p>12:00</p>
        </div>
      </div>
    </button>
  );
};

export default ChatItem; // Export the component so you can use it in other files

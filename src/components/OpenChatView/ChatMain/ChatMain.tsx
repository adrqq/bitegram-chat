import React from "react";
import s from "./ChatMain.module.scss";

export const ChatMain = () => {
  const userLogged = {
    userId: 1000,
    fullName: "Pink Panda",
  };

  const [messages, setMessages] = React.useState([
    {
      id: 1,
      text: "Hello, how are you?",
      timestamp: "2021-08-01T12:00:00.000Z",
      user: {
        userId: 1000,
        fullName: "Pink Panda",
      },
    },

    {
      id: 2,
      text: "Hi, I am good, thanks!",
      timestamp: "2021-08-01T12:03:00.000Z",
      user: {
        userId: 2000,
        fullName: "Panda",
      },
    },

    {
      id: 3,
      text: "What about you?",
      timestamp: "2021-08-01T12:03:00.000Z",
      user: {
        userId: 2000,
        fullName: "Panda",
      },
    },

    {
      id: 4,
      text: "I am fine, thanks!",
      timestamp: "2021-08-01T12:05:00.000Z",
      user: {
        userId: 1000,
        fullName: "Pink Panda",
      },
    },

    {
      id: 5,
      text: "What are you doing?",
      timestamp: "2021-08-01T12:09:00.000Z",
      user: {
        userId: 1000,
        fullName: "Pink Panda",
      },
    },

    {
      id: 6,
      text: "I am working on my new project.",
      timestamp: "2021-08-01T12:10:00.000Z",
      user: {
        userId: 2000,
        fullName: "Panda",
      },
    },

    {
      id: 7,
      text: "Oh, sounds cool!",
      timestamp: "2021-08-01T12:11:00.000Z",
      user: {
        userId: 1000,
        fullName: "Pink Panda",
      },
    },
    
    {
      id: 8,
      text: "Yeah, it is.",
      timestamp: "2021-08-01T12:12:00.000Z",
      user: {
        userId: 2000,
        fullName: "Panda",
      },
    },

    {
      id: 9,
      text: "What about you?",
      timestamp: "2021-08-01T12:13:00.000Z",
      user: {
        userId: 2000,
        fullName: "Panda",
      },
    },
  ]);

  return (
    <div className={s.chat_main}>
      <div className={s.chat_main__foreign_massage}>
        <p className={s.chat_main__foreign_massage__text}>
          Hi 👋🏻, How are ya ?
        </p>
      </div>

      <div className={s.black_row__wrapper}>
        <div className={s.black_row} />

        <span className={s.black_row__date}>Today</span>

        <div className={s.black_row} />
      </div>

      {messages.map((massage) => {
        if (massage.user.userId === userLogged.userId) {
          return (
            <div className={s.chat_main__user_massage}>
              <p className={s.chat_main__user_massage__text}>
                {massage.text}
              </p>

              <span className={s.chat_main__user_massage__date}>
                {massage.timestamp.slice(11, 16)}
              </span>
            </div>
          );
        } else {
          return (
            <div className={s.chat_main__foreign_massage}>
              <p className={s.chat_main__foreign_massage__text}>
                {massage.text}
              </p>

              <span className={s.chat_main__foreign_massage__date}>
                {massage.timestamp.slice(11, 16)}
              </span>
            </div>
          );
        }
      })}
    </div>
  );
};

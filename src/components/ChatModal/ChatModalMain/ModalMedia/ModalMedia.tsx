import React from "react";
import s from "./ModalMedia.module.scss";
import manPhoto from "../../../../images/Rectangle 31.png";

export const ModalMedia = () => {
  const messages = [
    { id: "1", date: 1, img: manPhoto },
    { id: "2", date: 1, img: manPhoto },
    { id: "3", date: 1, img: manPhoto },
    { id: "4", date: 1, img: manPhoto },
    { id: "5", date: 1, img: manPhoto },
    { id: "6", date: 2, img: manPhoto },
    { id: "7", date: 2, img: manPhoto },
    { id: "8", date: 2, img: manPhoto },
    { id: "9", date: 2, img: manPhoto },
    { id: "10", date: 2, img: manPhoto },
    { id: "11", date: 3, img: manPhoto },
    { id: "12", date: 3, img: manPhoto },
    { id: "13", date: 3, img: manPhoto },
    { id: "14", date: 3, img: manPhoto },
    { id: "15", date: 3, img: manPhoto },
    { id: "16", date: 4, img: manPhoto },
    { id: "17", date: 4, img: manPhoto },
    { id: "18", date: 4, img: manPhoto },
    { id: "19", date: 4, img: manPhoto },
    { id: "20", date: 4, img: manPhoto },
  ];

  const DayEvent = [];

  const fetchPhotos = () => {
    let data = [...messages];
    const res: any = {};

    while (data.length > 0) {
      data.sort((a, b) => a.date - b.date);

      const day = data[0].date;

      const allDayPhotos = data.filter((item) => item.date === day);

      res[day] = allDayPhotos;

      data = data.filter((item) => item.date !== day);
    }

    return res;
  };

  const result = fetchPhotos();

  console.log(fetchPhotos());

  return (
    <div className={s.modal_media}>
      <div className={s.modal_media__item}>
        {Object.keys(result).map((day) => {
          return (
            <div className={s.modal_media__item__day}>
              <div className={s.modal_media__item__day__title}>{day}</div>
              <div className={s.modal_media__item__day__photos}>
                {result[day].map((item: any) => {
                  return (
                    <div className={s.modal_media__item__day__photos__photo}>
                      <img src={item.img} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { FC, useState } from "react";
import s from "./Swiper.module.scss";

type SwiperPropsType = {
  isChecked: boolean;
  onClick: () => void;
  size: number;
};

export const Swiper: FC<SwiperPropsType> = ({ isChecked, onClick, size }) => {
  const [isClicked, setIsClicked] = useState(false);

  const sliderStyles = {
    "--slider-width": `${size}px`,
    "--slider-height": `${size / 1.775}px`,
    "--slider-before-size": `${size / 2.21875}px`,
    "--slider-transform": `${size / 2.3666}px`,
  } as React.CSSProperties;

  return (
    <label style={sliderStyles} className={s.switch}>
      <input
        onChange={() => {
          setIsClicked(!isClicked);
          onClick();
        }}
        checked={isChecked}
        type="checkbox"
      />

      <span className={s.slider} />
    </label>
  );
};

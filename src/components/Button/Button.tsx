import React from "react";
import s from "./Button.module.scss";
interface IProps {
  className: string
  value: number | string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button: React.FC<IProps> = ({ className, value, onClick }) => {
  return (
    <button className={s.className} onClick={onClick}>
      {value}
    </button>
  );
};

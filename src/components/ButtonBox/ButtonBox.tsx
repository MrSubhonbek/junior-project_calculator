import React from "react";
import s from "./ButtonBox.module.scss";
interface IProps {
    children:
    | JSX.Element
    | JSX.Element[]
}
export const ButtonBox: React.FC<IProps> = ({ children }) => {
    return <div className={s.buttonBox}>{children}</div>;
};
import React from "react";
import s from "./Wrapper.module.scss";
interface IProps {
    children:
    | JSX.Element
    | JSX.Element[]
}
export const Wrapper: React.FC<IProps> = ({ children }) => {
    return <div className={s.wrapper}>{children}</div>;
};
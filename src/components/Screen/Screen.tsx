import React from "react";
import { Typography } from "antd";
import s from "./Screen.module.scss";
interface IProps {
    value: number|string
}
export const Screen: React.FC<IProps> = ({ value }) => {
    return (
        <Typography.Text className={s.screen}>
            {value}
        </Typography.Text>
    );
};
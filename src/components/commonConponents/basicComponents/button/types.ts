import {MouseEventHandler} from "react";

export interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;

}
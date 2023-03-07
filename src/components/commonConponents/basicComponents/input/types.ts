import {ChangeEventHandler} from "react";

export interface InputProps {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    type?: string;
    placeholder?: string;
    value?: string;
}
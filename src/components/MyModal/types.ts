import {MouseEventHandler} from "react";

export interface ModalProps {
    visible: boolean;
    children?: React.ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    setVisible: (value: boolean) => void;
}
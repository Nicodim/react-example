import React from 'react';
import {ModalContainer, ModalContent} from "./styles";
import {ModalProps} from "./types";

const MyModal = ({visible, children, setVisible}: ModalProps) => {
    return (
        // @ts-ignore
        <ModalContainer visible={visible} onClick={ () => setVisible(false)}>
            <ModalContent onClick={(el) => el.stopPropagation()}>
                {children}
            </ModalContent>
        </ModalContainer>
    );
};

export default MyModal;
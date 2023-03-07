import React from 'react';
import {ButtonProps} from "./types";
import {StyledButton} from "./styles";

const Button = ({children, ...props}: ButtonProps) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;
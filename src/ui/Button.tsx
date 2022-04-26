import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { IButtonProps } from './interfaces';

const StyledButton = styled.button<IButtonProps>`
    border: none;
    border-radius: ${(props) => props.borderRadius || '0.625rem'};
    background: ${(props) => props.background || '#FFFFFF'};
    color: ${(props) => props.color || '#367BF5'};
    width: ${(props) => props.width || '#FFFFFF'};
    height: ${(props) => props.height || '2.5rem'};
    margin: ${(props) => props.margin || '0'};
    padding: ${(props) => props.padding || '9px 8px'};
    box-shadow: ${(props) =>
        props.boxShadow ||
        '0px 4px 8px rgba(54, 123, 245, 0.16), 0px 2px 4px rgba(54, 123, 245, 0.24)'};

    &:hover {
        cursor: pointer;
    }
`;

const Button: React.FC<
    PropsWithChildren<IButtonProps> | ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

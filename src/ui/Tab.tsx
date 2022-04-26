import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface ITab {
    active?: boolean;
    onClick: () => void;
}

const StyledTab = styled.div<ITab>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    z-index: 2;
    cursor: pointer;
    min-width: 6.25rem;
    height: 4rem;
    padding: 1rem;

    ${(props) =>
        props.active &&
        css`
            border: 1px #c6cacc solid;
            border-bottom: none;
            border-radius: 0.25rem 0.25rem 0 0;
        `}
`;

const Tab: React.FC<PropsWithChildren<ITab>> = (props) => {
    return <StyledTab {...props}>{props.children}</StyledTab>;
};

export default Tab;

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface IMargin {
    margin?: string;
}

const StyledMargin = styled.div<IMargin>`
    margin: ${(props) => props.margin || 0};
`;

const Margin: React.FC<PropsWithChildren<IMargin>> = (props) => {
    return <StyledMargin {...props}>{props.children}</StyledMargin>;
};

export default Margin;

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { IFlexProps } from './interfaces';

const StyledFlex = styled.div<IFlexProps>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.align || 'stretch'};
    justify-content: ${(props) => props.justify || 'stretch'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '100%'};
`;

const Flex: React.FC<PropsWithChildren<IFlexProps>> = (props) => {
    return <StyledFlex {...props}>{props.children}</StyledFlex>;
};

export default Flex;

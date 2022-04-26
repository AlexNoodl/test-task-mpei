import React from 'react';
import styled, { css } from 'styled-components';
import { IFilter } from '../interfaces';
import Flex from '../ui/Flex';
import Icon from '../ui/Icon';

const FilterTitle = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`;

const FilterDescription = styled.p`
    font-size: 0.75rem;
    color: #5e6366;
    line-height: 1rem;
`;

const StyledFilter = styled.div<IFilter>`
    width: 16.25rem;
    height: 3.5rem;
    border-radius: 0.625rem;
    cursor: pointer;
    padding: 7px 0 7px 0.75rem;

    ${(props) =>
        props.isActive &&
        css`
            background-color: #e5efff;
        `}
`;

const Filter: React.FC<IFilter> = (props) => {
    return (
        <StyledFilter {...props}>
            <Flex align={'center'}>
                <Icon
                    iconName={props.image}
                    color={props.isActive ? '#367BF5' : '#78909C'}
                    width={28}
                    height={28}
                />
                <div>
                    <FilterTitle>{props.title}</FilterTitle>
                    <FilterDescription>{props.description}</FilterDescription>
                </div>
            </Flex>
        </StyledFilter>
    );
};

export default Filter;

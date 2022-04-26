import React from 'react';

export interface IFlexProps {
    direction?: TFlexDirection;
    align?: TAlignItems;
    justify?: TJustifyContent;
    margin?: string;
    width?: string;
    height?: string;
    children: React.ReactNode;
}

type TJustifyContent =
    | 'center'
    | 'start'
    | 'space-between'
    | 'space-around'
    | 'end'
    | 'flex-start'
    | 'flex-end';

type TAlignItems =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';

type TFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

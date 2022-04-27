import React from 'react';
import Icons from '../assets/images/icons/icons.svg'

interface IIconProps {
    iconName: TIconNames;
    color?: string;
    width: number;
    height: number;
}

export type TIconNames =
    | 'print'
    | 'even'
    | 'odd'
    | 'download'
    | 'create-new'
    | 'up'
    | 'down';

const Icon: React.FC<IIconProps> = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            color={props.color || '#78909C'}
        >
            <use
                xlinkHref={`${Icons}#${props.iconName}`}
            />
        </svg>
    );
};

export default Icon;

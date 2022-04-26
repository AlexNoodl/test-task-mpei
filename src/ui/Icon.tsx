import React from 'react';

interface IIconProps {
    iconName: TIconNames;
    color?: string;
    width: number;
    height: number;
}

export type TIconNames =
    | 'all-data'
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
                href={`assets/images/icons/${props.iconName}.svg#${props.iconName}`}
            />
        </svg>
    );
};

export default Icon;

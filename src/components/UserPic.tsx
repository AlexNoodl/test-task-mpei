import React from 'react';
import styled from 'styled-components';

interface IUserPic {
    borderRadius?: string;
    width?: string;
    height?: string;
    img: string;
    description: string;
}

const StyledUserPic = styled.img<IUserPic>`
    width: ${(props) => props.width || '2.5rem'};
    height: ${(props) => props.height || '2.5rem'};
    border-radius: ${(props) => props.borderRadius || '99px'};
`;

const UserPic: React.FC<IUserPic> = (props) => {
    return <StyledUserPic src={props.img} alt={props.description} {...props} />;
};

export default UserPic;

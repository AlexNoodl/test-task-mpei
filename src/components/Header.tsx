import React from 'react';
import Flex from '../ui/Flex';
import Logo from './Logo';
import Button from '../ui/Button';
import UserPic from './UserPic';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
    height: 4rem;
    width: 100%;
    padding: 0.75rem 1rem;
`;

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader>
            <Flex justify={'space-between'}>
                <Logo />
                <Flex justify={'end'}>
                    <Button
                        onClick={() => navigate('/help')}
                        width={'6rem'}
                        boxShadow={'none'}
                        color={'#5E6366'}
                        background={'#F7F9FA'}
                    >
                        <Flex justify={'space-between'}>
                            <p>Help</p>
                            <img
                                src={'assets/images/header/help.svg'}
                                alt={'help'}
                            />
                        </Flex>
                    </Button>
                    <Button
                        onClick={() => navigate('/upgrade')}
                        width={'6rem'}
                        margin={'0 1rem'}
                    >
                        Upgrade
                    </Button>
                    <UserPic
                        img={'assets/images/header/userpic.svg'}
                        description={'Avatar'}
                    />
                </Flex>
            </Flex>
        </StyledHeader>
    );
};

export default Header;

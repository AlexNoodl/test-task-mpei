import React from 'react';
import styled from 'styled-components';
import Flex from '../ui/Flex';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface ILogoTextProps {
    color?: string;
}

const LogoText = styled.p<ILogoTextProps>`
    font-family: 'Racing Sans One', cursive;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: ${(props) => props.color || '#5E6366'};
`;

const Logo = () => {
    const navigate = useNavigate();

    return (
        <Flex align={'center'}>
            <Button
                onClick={() => navigate('/')}
                padding={'4px'}
                width={'2rem'}
                height={'2rem'}
                borderRadius={'0.625rem'}
                boxShadow={
                    '0px 2px 6px rgba(8, 35, 48, 0.16), 0px 1px 2px rgba(8, 35, 48, 0.24)'
                }
                margin={'0 0.625rem 0 0'}
            >
                <LogoText color={'#367BF5'}>D</LogoText>
            </Button>
            <LogoText>Dashboard</LogoText>
        </Flex>
    );
};

export default Logo;

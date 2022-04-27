import React from 'react';
import styled from 'styled-components';
import Flex from '../ui/Flex';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import arrowDown from '../assets/images/icons/arrow_down.svg'

const StyleTitle = styled.div`
    font-family: Quicksand, serif;
    font-size: 2.125rem;
    line-height: 2.625rem;
    color: #000000;
`;

const StyledSelect = styled.select`
    height: 2rem;
    width: 14.5rem;
    background: url(${arrowDown}) no-repeat 97% center;
    border: 1px #c6cacc solid;
    border-radius: 0.625rem;
    padding: 0.25rem 0.75rem;
    appearance: none;

    > option {
        font-size: 0.875rem;
        line-height: 1.25rem;
        letter-spacing: 0.25px;
    }
`;

const TableHeader: React.FC = () => {
    function printData() {
        console.log('The data has been sent for printing');
    }

    function downloadData() {
        console.log('Download data in progress...');
    }

    return (
        <Flex height={'2rem'} align={'center'} justify={'space-between'}>
            <StyleTitle>Dashboard</StyleTitle>
            <Flex justify={'flex-end'}>
                <StyledSelect>
                    <option>Aug 21, 2021 &#183; Sep 21 2021</option>
                </StyledSelect>
                <Button
                    onClick={() => printData()}
                    width={'2rem'}
                    height={'2rem'}
                    borderRadius={'0.25rem'}
                    boxShadow={'0'}
                    margin={'0 0.5rem'}
                    padding={'0.625rem'}
                >
                    <Icon iconName={'print'} width={22} height={22} />
                </Button>
                <Button
                    onClick={() => downloadData()}
                    width={'2rem'}
                    height={'2rem'}
                    borderRadius={'0.25rem'}
                    boxShadow={'0'}
                    padding={'0.5rem 0.5rem'}
                >
                    <Icon iconName={'download'} width={18} height={16} />
                </Button>
            </Flex>
        </Flex>
    );
};

export default TableHeader;

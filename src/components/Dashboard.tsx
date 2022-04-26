import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Flex from '../ui/Flex';
import Button from '../ui/Button';
import { Filters } from '../data';
import Filter from './Filter';

import Icon from '../ui/Icon';
import TableHeader from './TableHeader';
import Table from './Table';
import Margin from '../ui/Margin';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { tableSelector, tableSlice } from '../store/reducers/TableSlice';
import { IRows } from '../interfaces';

const StyledDashboard = styled.div`
    width: 100%;
    height: calc(100vh - 8rem);
    background: #e2f0f0;
    padding: 0.75rem 7.5rem 2rem 5rem;
`;

const StyledButtonText = styled.p`
    margin-left: 1rem;
`;

const Dashboard: React.FC = () => {
    const filters = Filters;
    const dispatch = useAppDispatch();
    const { rows } = useAppSelector(tableSelector);
    const { even, odd, clearFilters, addNew, search, sort } =
        tableSlice.actions;
    const [, setActiveFilter] = useState(Filters);

    const addNewData = (): void => {
        const newRow: IRows = {
            column1: `Data${rows.length + 1}`,
            column2: randomSum(),
            column3: randomSum(),
            column4: randomSum(),
            column5: randomSum(),
            column6: randomSum(),
        };
        dispatch(addNew(newRow));
    };

    const randomSum = (): number => Math.floor(Math.random() * 500);

    const searchHandler = (str: string) => {
        if (!str) {
            dispatch(clearFilters());
        } else {
            dispatch(search(str));
        }
    };

    const changeFilter = (index: number) => {
        let newFilters = filters.map((f, i) => {
            f.isActive = i === index;
            return f;
        });
        setActiveFilter(newFilters);

        switch (index) {
            case 0:
                return dispatch(even());
            case 1:
                return dispatch(odd());
            case 2:
                return dispatch(clearFilters());
        }
    };
    const sortHandler = () => {
        dispatch(sort());
    };

    useEffect(() => {}, [rows, filters]);

    return (
        <StyledDashboard>
            <Flex>
                <Flex direction={'column'}>
                    <Button
                        width={'13.3rem'}
                        height={'3.5rem'}
                        margin={'1rem 6.18rem 1rem 0'}
                        padding={'0.625rem 1rem 0.625rem 1.5rem'}
                        borderRadius={'99px'}
                        boxShadow={
                            '0px 16px 24px rgba(54, 123, 245, 0.16), 0px 6px 12px rgba(54, 123, 245, 0.16)'
                        }
                        onClick={() => addNewData()}
                    >
                        <Flex align={'center'}>
                            <Icon
                                iconName={'create-new'}
                                color={'#367BF5'}
                                width={16}
                                height={16}
                            />
                            <StyledButtonText>Create new</StyledButtonText>
                        </Flex>
                    </Button>
                    {filters &&
                        filters.map((filter, index) => (
                            <Filter
                                key={filter.title}
                                image={filter.image}
                                title={filter.title}
                                description={filter.description}
                                isActive={filter.isActive}
                                onClick={() => changeFilter(index)}
                            />
                        ))}
                </Flex>
                <Flex direction={'column'}>
                    <Margin margin={'0 0 2rem 0'}>
                        <TableHeader />
                    </Margin>
                    <Table
                        rows={rows}
                        search={(str) => searchHandler(str)}
                        sort={() => sortHandler()}
                    />
                </Flex>
            </Flex>
        </StyledDashboard>
    );
};

export default Dashboard;

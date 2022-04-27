import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {HeaderData} from '../data';
import Flex from '../ui/Flex';
import {IRows} from '../interfaces';
import Icon from '../ui/Icon';
import Margin from '../ui/Margin';

interface ITableRow {
    border?: string | number;
}

interface ITable {
    rows: IRows[];
    search: (str: string) => void;
    sort: () => void;
    query: string;
}

const StyledTableWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  min-width: 57.5rem;
`;

const StyledTableCell = styled.div<ITableRow>`
  border-top: ${(props) => props.border || '2px #e3e5e5 solid'};
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: ${(props) => props.color || '#5E6366'};
  height: 4rem;
`;

const StyledHeaderCell = styled(StyledTableCell)`
  font-family: Quicksand, serif;
  font-size: 1rem;
  border-top: none;
`;

const StyledSearch = styled.input`
  background: 0;
  border: 1px #c6cacc solid;
  border-radius: 0.625rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;

  &::placeholder {
    color: #000000;
  }
`;

const StyledPlug = styled.div`
  border: 1px #c6cacc solid;
  border-radius: 0.625rem;
  width: 5.375rem;
  height: 2rem;
`;

const StyledIconWrapper = styled.div`
  position: relative;
`;

const UpArrowDiv = styled.div`
  position: absolute;
  top: -7px;
`;

const DownArrowDiv = styled(UpArrowDiv)`
  position: absolute;
  top: 3px;
`;

const StyledSortCell = styled.div`
  cursor: pointer;
`;

const Table: React.FC<ITable> = ({rows, search, sort, query}) => {
    const clickSort = () => {
        let isDefault = !isDefaultSort;
        setIsDefaultSort(isDefault);
        sort();
    };

    const [isDefaultSort, setIsDefaultSort] = useState(true);
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!query) {
            setInputValue('')
        }
    }, [query])

    useEffect(() => {
        search(inputValue)
    }, [inputValue, search])

    return (
        <StyledTableWrapper>
            <StyledHeaderCell>
                <Flex>
                    <StyledSortCell onClick={() => clickSort()}>
                        <StyledIconWrapper>
                            <UpArrowDiv>
                                <Icon
                                    iconName={'up'}
                                    width={9}
                                    height={6}
                                    color={
                                        isDefaultSort ? '#C6CACC' : '#069697'
                                    }
                                />
                            </UpArrowDiv>
                            <DownArrowDiv>
                                <Icon
                                    iconName={'down'}
                                    width={9}
                                    height={6}
                                    color={
                                        isDefaultSort ? '#069697' : '#C6CACC'
                                    }
                                />
                            </DownArrowDiv>
                        </StyledIconWrapper>
                        <Margin margin={'0 0 0 12px'}>
                            <StyledHeaderCell>Data</StyledHeaderCell>
                        </Margin>
                    </StyledSortCell>
                </Flex>
            </StyledHeaderCell>

            {HeaderData.map((col, index) => (
                <StyledHeaderCell key={index}>{col}</StyledHeaderCell>
            ))}

            {rows &&
                rows.map((row, index) =>
                    Object.values(row).map((col, i) => (
                        <StyledTableCell
                            color={i === 0 ? '#000000' : '#5E6366'}
                            key={`${index}${i}`}
                        >
                            {col}
                        </StyledTableCell>
                    )),
                )}

            <StyledTableCell border={'none'}>
                <StyledSearch
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={'Search...'}
                />
            </StyledTableCell>

            {HeaderData.map((_, index) => (
                <StyledTableCell key={index} border={'none'}>
                    <StyledPlug/>
                </StyledTableCell>
            ))}
        </StyledTableWrapper>
    );
};

export default Table;

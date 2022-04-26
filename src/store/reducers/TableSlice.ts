import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRows } from '../../interfaces';
import { TableData } from '../../data';
import { RootState } from '../store';

interface TableState {
    rows: IRows[];
}

const initialState: TableState = {
    rows: TableData,
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        clearFilters: (state) => initialState,
        even: (state) => {
            state.rows = state.rows.filter((row, index) => index % 2 !== 0);
        },
        odd: (state) => {
            state.rows = state.rows.filter((row, index) => index % 2 === 0);
        },
        sort: (state) => {
            state.rows = [...state.rows].reverse();
        },
        addNew: (state, action: PayloadAction<IRows>) => {
            state.rows.push(action.payload);
        },
        search: (state, action: PayloadAction<string>) => {
            state.rows = state.rows.filter((row) =>
                Object.values(row)
                    .toString()
                    .toLowerCase()
                    .includes(action.payload.toLowerCase()),
            );
        },
    },
});

export default tableSlice.reducer;

export const tableSelector = (state: RootState) => state.table;

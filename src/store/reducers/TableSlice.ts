import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IRows, ISearchParams} from '../../interfaces';
import {TableData} from '../../data';
import {RootState} from '../store';

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
        clearFilters: (state, action: PayloadAction<ISearchParams>) => {
            if (action.payload.reversed) {
                state.rows = [...initialState.rows].reverse()
            } else {
                return initialState;
            }
        },
        search: (state, action: PayloadAction<ISearchParams>) => {
            state.rows = initialState.rows.filter(row => row.column1.toLowerCase().includes(action.payload.query.toLowerCase()))

            if (action.payload.odd) {
                state.rows = state.rows.filter((row, index) => index % 2 === 0)
            }

            if (action.payload.even) {
                state.rows = state.rows.filter((row, index) => index % 2 !== 0)
            }

            if (action.payload.reversed) {
                state.rows = [...state.rows].reverse()
            }

        },
        addNew: (state, action: PayloadAction<IRows>) => {
            state.rows.push(action.payload);
        },

    },
});

export default tableSlice.reducer;

export const tableSelector = (state: RootState) => state.table;


import { IFilter } from '../interfaces';

type TFilterData = Omit<IFilter, 'onClick'>;

export const Filters: TFilterData[] = [
    {
        image: 'even',
        title: 'Even rows of data',
        description: 'Display rows 2,4,6 etc',
        isActive: false,
    },
    {
        image: 'odd',
        title: 'Odd rows of data',
        description: 'Display rows 1,3,5 etc',
        isActive: false,
    },
    {
        image: 'print',
        title: 'All data',
        description: 'Display all data',
        isActive: true,
    },
];

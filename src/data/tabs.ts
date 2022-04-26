export interface ITabs {
    title: string;
    active: boolean;
    id: number;
}

export const Tabs: ITabs[] = [
    { title: 'Analyze', active: true, id: 1 },
    { title: 'My campaigns', active: false, id: 2 },
    { title: 'Configure', active: false, id: 3 },
];

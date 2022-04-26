import { TIconNames } from '../ui/Icon';

export interface IFilter {
    image: TIconNames;
    title: string;
    description: string;
    color?: string;
    onClick: () => void;
    isActive: boolean;
}

import { ListItem } from './CollapseList.types';
export declare const getHiddenAndVisibleData: <T extends ListItem>(data: T[]) => {
    hiddenData: T[];
    visibleData: T[];
};

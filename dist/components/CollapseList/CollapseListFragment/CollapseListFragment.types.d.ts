import type { ReactElement } from 'react';
export declare type IndexedMapFn<T1, T2 = T1, U = unknown> = (item: T1, idx: number, list: T2[]) => U;
export declare type ExtraProps = {
    testIdStartIndex: number;
};
export declare type CollapseListFragmentProps<T extends object> = {
    data: T[];
    render: IndexedMapFn<T & ExtraProps, T, ReactElement>;
} & Partial<ExtraProps>;

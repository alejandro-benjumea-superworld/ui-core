import type { ReactElement } from 'react';

export type IndexedMapFn<T1, T2 = T1, U = unknown> = (
  item: T1,
  idx: number,
  list: T2[],
) => U;

export type ExtraProps = {
  testIdStartIndex: number;
};

export type CollapseListFragmentProps<T extends object> = {
  data: T[];
  render: IndexedMapFn<T & ExtraProps, T, ReactElement>;
} & Partial<ExtraProps>;

import { addIndex, map, mergeRight } from 'ramda';
import type { Merge } from 'ramda';

import { IndexedMapFn } from './CollapseListFragment.types';

export const mapIndexed = addIndex(map);

export const addExtraPropsToValueMapper =
  <T extends object, E extends object, U>(
    extraProps: E,
    fn: IndexedMapFn<Merge<E, T, 'flat'>, T, U>,
  ): IndexedMapFn<T, T, U> =>
  (value, index, list) =>
    fn(mergeRight(value, extraProps), index, list);

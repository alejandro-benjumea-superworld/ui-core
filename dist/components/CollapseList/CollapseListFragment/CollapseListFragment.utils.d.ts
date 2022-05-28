/// <reference types="ts-toolbelt" />
import type { Merge } from 'ramda';
import { IndexedMapFn } from './CollapseListFragment.types';
export declare const mapIndexed: import("Function/Curry").Curry<(a: (item: unknown, idx: number, list: unknown[]) => void, b: readonly unknown[]) => unknown[]>;
export declare const addExtraPropsToValueMapper: <T extends object, E extends object, U>(extraProps: E, fn: IndexedMapFn<import("Object/Merge").MergeFlat<import("List/ObjectOf").ObjectOf<E>, import("List/ObjectOf").ObjectOf<T>, 1, import("Misc/BuiltInObject").BuiltInObject>, T, U>) => IndexedMapFn<T, T, U>;

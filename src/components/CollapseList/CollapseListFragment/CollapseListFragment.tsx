import React from 'react';

import {
  addExtraPropsToValueMapper,
  mapIndexed,
} from './CollapseListFragment.utils';
import type { CollapseListFragmentProps } from './CollapseListFragment.types';

export const CollapseListFragment = <T extends object>(
  props: CollapseListFragmentProps<T>,
) => {
  const { data, render, testIdStartIndex = 0 } = props;
  const mapper = addExtraPropsToValueMapper(
    { testIdStartIndex },
    render as any,
  );
  return <>{mapIndexed(mapper as any, data)}</>;
};

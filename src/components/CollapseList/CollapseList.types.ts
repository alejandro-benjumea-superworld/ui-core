import type { CollapseProps } from '@mui/material';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import { CollapseListFragmentProps } from './CollapseListFragment';

export interface ListItem {
  hidden: boolean;
}

export type CollapseListProps<T extends ListItem> = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  CollapseProps?: CollapseProps;
  data: T[];
  expanded?: boolean;
  render: CollapseListFragmentProps<T>['render'];
  testId?: string;
};

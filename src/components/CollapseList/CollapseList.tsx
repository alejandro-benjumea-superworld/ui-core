import { Collapse } from '@mui/material';
import React, { ReactElement, useMemo } from 'react';

import { CollapseListFragment } from './CollapseListFragment';
import { DEFAULT_TEST_ID } from './CollapseList.constants';
import { getHiddenAndVisibleData } from './CollapseList.utils';
import { useStyles } from './CollapseList.styles';
import type { CollapseListProps, ListItem } from './CollapseList.types';

export const CollapseList = <T extends ListItem>(
  props: CollapseListProps<T>,
): ReactElement => {
  const {
    className,
    CollapseProps,
    data,
    expanded = false,
    render,
    testId = DEFAULT_TEST_ID,
    ...rest
  } = props;

  const { classes, cx } = useStyles();
  const { hiddenData, visibleData } = useMemo(
    () => getHiddenAndVisibleData(data),
    [data],
  );

  return (
    <ul className={cx(classes.root, className)} data-testid={testId} {...rest}>
      <CollapseListFragment data={visibleData} render={render} />

      <Collapse
        classes={{
          root: classes.bottomRadius,
          wrapper: classes.bottomRadius,
          wrapperInner: classes.bottomRadius,
        }}
        in={expanded}
        timeout="auto"
        unmountOnExit
        {...CollapseProps}
      >
        <CollapseListFragment
          data={hiddenData}
          render={render}
          testIdStartIndex={visibleData.length}
        />
      </Collapse>
    </ul>
  );
};

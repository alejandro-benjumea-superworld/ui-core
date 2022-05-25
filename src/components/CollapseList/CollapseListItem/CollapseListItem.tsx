import { ListItem } from '@mui/material';
import React from 'react';
import type { FC } from 'react';

import { useStyles } from './CollapseListItem.styles';
import type { CollapseListItemProps } from './CollapseListItem.types';

export const CollapseListItem: FC<CollapseListItemProps> = (props) => {
  const { children, className, ...rest } = props;

  const { classes, cx } = useStyles();

  return (
    <ListItem className={cx(classes.root, className)} {...rest}>
      {children}
    </ListItem>
  );
};

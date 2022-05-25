import { ButtonBase } from '@mui/material';
import React from 'react';
import type { FC } from 'react';

import { CollapseListItem } from '../CollapseListItem';
import { useStyles } from './CollapseListButtonItem.styles';
import type { CollapseListButtonItemProps } from './CollapseListButtonItem.types';

export const CollapseListButtonItem: FC<CollapseListButtonItemProps> = (
  props,
) => {
  const { ButtonProps, children, className, disabled, onClick, ...rest } =
    props;

  const { classes, cx } = useStyles(props);

  return (
    <CollapseListItem className={cx(classes.root, className)} {...rest}>
      <ButtonBase
        className={classes.button}
        disabled={disabled}
        onClick={onClick}
        {...ButtonProps}
      >
        {children}
      </ButtonBase>
    </CollapseListItem>
  );
};

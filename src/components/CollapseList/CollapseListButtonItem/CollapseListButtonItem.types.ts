import type { ButtonBaseProps } from '@mui/material';

import type { CollapseListItemProps } from '../CollapseListItem';

export type CollapseListButtonItemProps = Omit<
  CollapseListItemProps,
  'onClick'
> &
  Pick<ButtonBaseProps, 'disabled' | 'onClick'> & {
    ButtonProps?: ButtonBaseProps;
  };

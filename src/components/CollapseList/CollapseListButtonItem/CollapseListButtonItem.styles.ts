import { makeStyles } from 'tss-react/mui';

import type { CollapseListButtonItemProps } from './CollapseListButtonItem.types';

export const useStyles = makeStyles<CollapseListButtonItemProps>({
  name: 'collapse-list-button-item-props',
})((theme, { disabled }) => ({
  root: {
    padding: 0,
  },
  button: {
    opacity: disabled ? '0.8' : undefined,
    padding: theme.spacing(2.75, 2.625, 2.75, 3.625),
    width: '100%',
  },
}));

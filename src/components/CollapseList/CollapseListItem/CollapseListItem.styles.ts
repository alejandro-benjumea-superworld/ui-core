import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'collapse-list-item' })(
  (theme) => ({
    root: {
      borderColor: theme.palette.byName.alto3,
      borderStyle: 'solid',
      borderWidth: 1,
      listStyle: 'none',
      overflow: 'hidden',
      padding: theme.spacing(2.75, 2.625, 2.75, 3.625),
      position: 'relative',
      '&:not(:last-child)': {
        borderBottomStyle: 'none',
      },
    },
  }),
);

import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles({ name: 'collapse-list' })((theme) => ({
  root: {
    borderRadius: 8,
    margin: 0,
    marginBottom: theme.spacing(4),
    padding: 0,
    '& li:first-child': {
      borderTopRightRadius: 'inherit',
      borderTopLeftRadius: 'inherit',
    },
    '& li:last-child': {
      borderBottomRightRadius: 'inherit',
      borderBottomLeftRadius: 'inherit',
    },
  },
  bottomRadius: {
    borderBottomRightRadius: 'inherit',
    borderBottomLeftRadius: 'inherit',
  },
}));

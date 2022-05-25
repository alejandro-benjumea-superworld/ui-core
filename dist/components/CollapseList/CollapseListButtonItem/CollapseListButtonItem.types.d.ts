import type { ButtonBaseProps } from '@mui/material';
import type { CollapseListItemProps } from '../CollapseListItem';
export declare type CollapseListButtonItemProps = Omit<CollapseListItemProps, 'onClick'> & Pick<ButtonBaseProps, 'disabled' | 'onClick'> & {
    ButtonProps?: ButtonBaseProps;
};

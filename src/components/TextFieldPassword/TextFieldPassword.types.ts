import type { OutlinedInputProps } from '@mui/material';

export type TextFieldPasswordProps = OutlinedInputProps & {
  helperText?: string;
  testId?: string;
};

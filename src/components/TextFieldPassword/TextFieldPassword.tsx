import {
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import { not } from 'ramda';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import React, { forwardRef, RefObject, useState } from 'react';

import { preventDefault } from '~utils/preventDefault';

import type { TextFieldPasswordProps } from './TextFieldPassword.types';

export const TextFieldPassword = forwardRef<
  RefObject<OutlinedInputProps>,
  TextFieldPasswordProps
>((props, ref) => {
  const {
    className,
    error,
    helperText,
    id = 'password',
    testId = 'password',
    label,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const onClickToogleVisibilityHandler = () => {
    setShowPassword(not);
  };

  const iconTestId = `${testId}-icon-button`;
  const helperTextTestId = `${testId}-helper-text`;

  return (
    <FormControl
      className={className}
      error={error}
      fullWidth
      variant="outlined"
      data-testid={testId}
    >
      <InputLabel htmlFor={id} shrink>
        {label}
      </InputLabel>

      <OutlinedInput
        autoCapitalize="none"
        autoComplete={id}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              disableRipple
              edge="end"
              onClick={onClickToogleVisibilityHandler}
              onMouseDown={preventDefault}
              size="small"
              data-testid={iconTestId}
            >
              {showPassword ? (
                <VisibilityOffOutlined />
              ) : (
                <VisibilityOutlined />
              )}
            </IconButton>
          </InputAdornment>
        }
        error={error}
        id={id}
        label={label}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        {...rest}
      />

      {helperText && (
        <FormHelperText data-test-id={helperTextTestId}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
});

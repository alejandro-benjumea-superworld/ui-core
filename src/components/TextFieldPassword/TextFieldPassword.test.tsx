import React from 'react';
import { render } from '@testing-library/react';

import { TextFieldPassword, TextFieldPasswordProps } from '.';

const setup = (props?: Omit<TextFieldPasswordProps, 'ref'>) => {
  const renderResult = render(<TextFieldPassword {...props} />);

  const { getByTestId } = renderResult;

  const iconButton = getByTestId('password-icon-button');

  return {
    ...renderResult,
    iconButton,
  };
};

describe('TextFieldPassword', () => {
  it(`renders icon button`, () => {
    const { iconButton } = setup();
    expect(iconButton).toBeInTheDocument();
  });
});

import { SyntheticEvent } from 'react';

export const preventDefault = (event: SyntheticEvent) => {
  event.preventDefault();
  return event;
};

import { filter, propEq, reject } from 'ramda';

import { ListItem } from './CollapseList.types';

const isHidden = propEq('hidden', true);
const getVisibleProviders = reject(isHidden);
const getHiddenProviders = filter(isHidden);

export const getHiddenAndVisibleData = <T extends ListItem>(data: T[]) => ({
  hiddenData: getHiddenProviders(data),
  visibleData: getVisibleProviders(data),
});

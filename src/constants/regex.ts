import { HTTP_PREFIX } from './shared';

export const STARTS_WITH_HTTP_REGEX = new RegExp(`^${HTTP_PREFIX}`, 'i');

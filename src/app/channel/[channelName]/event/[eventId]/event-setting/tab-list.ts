import { G } from '@mobily/ts-belt';

export const tabList = ['default', 'image-button'] as const;
export type TabList = (typeof tabList)[number];

export const tabGuard = (tab: unknown): tab is TabList => G.isString(tab) && tabList.includes(tab);

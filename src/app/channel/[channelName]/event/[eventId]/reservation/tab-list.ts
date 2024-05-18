export const tabList = ['all', 'by-time'] as const;
export type TabList = (typeof tabList)[number];

export const tabList = ['all', 'by-time'] as const;
export type TabList = (typeof tabList)[number];

export const tabGuard = (tab: unknown): tab is TabList =>
  typeof tab === 'string' && tabList.includes(tab);

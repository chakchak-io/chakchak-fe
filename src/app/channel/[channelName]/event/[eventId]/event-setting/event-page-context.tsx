import { createContext } from '@/lib/create-context';

interface ContextValue {
  currentTabDirty: boolean;
  onCurrentTabDirtyChange: (dirty: boolean) => void;
}

export const [EventPageContext, useEventPageContext] =
  createContext<ContextValue>('event-page-context');

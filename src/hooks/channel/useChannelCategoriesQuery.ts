import { useSuspenseQuery } from '@tanstack/react-query';

import { TypedSupabaseClient } from '@/lib/types';
import { getChannelCategories } from '@/utils/channel/queries';

export const useChannelCategoriesQuery = (supabase: TypedSupabaseClient) =>
  useSuspenseQuery({
    queryKey: ['channelCategories', supabase],
    queryFn: () => getChannelCategories(supabase),
    retry: false,
  });

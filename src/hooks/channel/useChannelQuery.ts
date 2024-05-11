import { useSuspenseQuery } from '@tanstack/react-query';

import { TypedSupabaseClient } from '@/lib/types';
import { fetchChannels } from '@/utils/channel/queries';

export const useChannelQuery = (supabase: TypedSupabaseClient, owner_id: string) => {
  const queryKey = ['channel'];
  const queryFn = async () => {
    const response = await fetchChannels(supabase, owner_id);
    return response;
  };

  return useSuspenseQuery({
    queryKey,
    queryFn,
    refetchInterval: 1000,
  });
};

import { useMutation } from '@tanstack/react-query';

import { TypedSupabaseClient } from '@/lib/types';
import { createChannel } from '@/utils/channel/queries';
import { ChannelCreateData } from '~/types/ChannelCreateData';

export const useChannelMutation = (supabase: TypedSupabaseClient) => {
  const mutationFn = (newChannel: ChannelCreateData) => {
    return createChannel(supabase, newChannel);
  };

  return useMutation({ mutationFn: mutationFn });
};

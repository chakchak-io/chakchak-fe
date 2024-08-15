import { TypedSupabaseClient } from '@/lib/types';
import { ChannelCreateData } from '~/types/ChannelCreateData';

export const getChannelCategories = async (client: TypedSupabaseClient) =>
  await client.from('channel-category').select();

export const createChannel = async (client: TypedSupabaseClient, data: ChannelCreateData) =>
  await client.from('channel').insert(data).throwOnError();

// we fetch channels that were created by the user
export const fetchChannels = async (client: TypedSupabaseClient, owner_id: string) =>
  await client.from('channel').select('*').eq('owner', owner_id);

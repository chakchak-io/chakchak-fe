import { TypedSupabaseClient } from '@/lib/types';
import { ChannelCreateData } from '~/types/ChannelCreateData';

export const getChannelCategories = async (client: TypedSupabaseClient) =>
  await client.from('channel-category').select();

export const createChannel = async (client: TypedSupabaseClient, data: ChannelCreateData) =>
  await client.from('channel').insert(data);

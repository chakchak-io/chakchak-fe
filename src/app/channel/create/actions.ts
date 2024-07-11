import { SupabaseClient } from '@supabase/supabase-js';

import { getChannelCategories } from '@/utils/channel/queries';

export async function getChannelCategoriesAction(supabase: SupabaseClient) {
  const { data, error } = await getChannelCategories(supabase);
  if (error) {
    throw error;
  }
  return data;
}

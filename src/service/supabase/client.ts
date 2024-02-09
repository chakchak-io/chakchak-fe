import { createBrowserClient } from '@supabase/ssr';

import { env } from '~/env.mjs';

export function createClient() {
  return createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
}

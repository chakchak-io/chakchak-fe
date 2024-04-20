import { useMemo } from 'react';

import { createClient } from '@/service/supabase/client';

export const useSupabaseBrowser = () => useMemo(() => createClient(), []);

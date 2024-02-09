import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// client side variable key should start with NEXT_PUBLIC_

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform((value) => value === 'true'),
    SUPABASE_URL: z.string().min(1),
    SUPABASE_ANON_KEY: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  },
});

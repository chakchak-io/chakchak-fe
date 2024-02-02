import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// client side variable key should start with NEXT_PUBLIC_

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
});

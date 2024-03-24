export const radiusKeyList = ['default', 'sm', 'lg', 'none'] as const;
export type RadiusKey = (typeof radiusKeyList)[number];

export const radiusVariants = {
  default: 'rounded-md',
  sm: 'rounded-sm',
  lg: 'rounded-lg',
  none: 'rounded-none',
} satisfies Record<RadiusKey, string>;

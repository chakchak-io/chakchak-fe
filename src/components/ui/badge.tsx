import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      // developers modified
      size: {
        default: 'px-2.5 py-0.5 text-xs font-semibold',
        button: 'px-4 py-2 text-base font-semibold',
      },
      radius: {
        default: 'rounded-full',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
      },
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      // developers modified
      colorReverse: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      {
        variant: 'default',
        colorReverse: true,
        className: 'bg-primary-foreground text-primary hover:bg-primary-foreground/80',
      },
      {
        variant: 'secondary',
        colorReverse: true,
        className: 'bg-secondary-foreground text-secondary hover:bg-secondary-foreground/80',
      },
      {
        variant: 'destructive',
        colorReverse: true,
        className: 'bg-destructive-foreground text-destructive hover:bg-destructive-foreground/80',
      },
      {
        variant: 'outline',
        colorReverse: true,
        className: 'text-foreground',
      },
    ],
    defaultVariants: {
      size: 'default',
      variant: 'default',
      radius: 'default',
      colorReverse: false,
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  // cva
  size,
  variant,
  radius,
  colorReverse,
  //
  className,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ size, variant, radius, colorReverse }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

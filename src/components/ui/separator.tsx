'use client';

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const separatorVariant = cva('', {
  variants: {
    color: {
      default: 'bg-border',
      '#E2E2FF': 'bg-[#E2E2FF]',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> &
    VariantProps<typeof separatorVariant>
>(
  (
    {
      // cva
      color,
      // separator props
      className,
      orientation = 'horizontal',
      decorative = true,
      ...props
    },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0',
        separatorVariant({ color }),
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };

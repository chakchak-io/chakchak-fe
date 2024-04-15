'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const checkboxVariant = cva(
  [
    'peer shrink-0 border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  ],
  {
    variants: {
      size: {
        '6': 'size-6',
      },
      rounded: {
        sm: 'rounded-sm',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: '6',
      rounded: 'full',
    },
  },
);

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> &
    VariantProps<typeof checkboxVariant>
>(
  (
    {
      //cva
      size,
      rounded,
      //
      className,
      ...props
    },
    ref,
  ) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(checkboxVariant({ size, rounded }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn('relative flex items-center justify-center text-current')}
      >
        <Check
          className="absolute left-1/2 top-1/2 size-4 -translate-x-1/2 translate-y-[calc(-50%+1px)]"
          strokeWidth="4"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

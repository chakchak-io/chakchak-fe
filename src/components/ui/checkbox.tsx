'use client';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cva, VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';
import * as React from 'react';
import { match, P } from 'ts-pattern';

import { cn } from '@/lib/utils';

const checkboxVariant = cva(
  [
    'peer shrink-0 border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
  ],
  {
    variants: {
      size: {
        '1': 'size-4',
        '1.5': 'size-6',
      },
      rounded: {
        sm: 'rounded-sm',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: '1.5',
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
      <CheckboxPrimitive.Indicator className={cn('flex items-center justify-center text-current')}>
        <Check
          className={cn(
            match(size)
              .with('1', () => 'size-[14px]')
              .with('1.5', () => 'size-5')
              .with(P.nullish, () => 'size-5')
              .exhaustive(),
          )}
          strokeWidth="4"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };

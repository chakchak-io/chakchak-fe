import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

import { radiusVariants } from './helper/radius';

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: [
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          '',
        ],
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        // default: 'h-10 px-6 py-4',
        // developers modified
        default: 'h-10 px-4 py-3',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        'big-icon': 'size-20',
        icon: 'size-6',
      },
      selected: {
        true: '',
        false: '',
      },
      activated: {
        true: '',
        false: '',
      },
      radius: radiusVariants,
    },
    compoundVariants: [
      // set selected style
      {
        selected: true,
        variant: 'default',
        className: 'bg-primary/90 text-primary-foreground',
      },
      {
        selected: true,
        variant: 'destructive',
        className: 'bg-destructive/90 text-destructive-foreground',
      },
      {
        selected: true,
        variant: 'outline',
        className: 'bg-accent text-accent-foreground',
      },
      {
        selected: true,
        variant: 'secondary',
        className: 'bg-secondary/80 text-secondary-foreground',
      },
      {
        variant: 'ghost',
        selected: true,
        className: 'bg-accent text-accent-foreground',
      },
      {
        variant: 'link',
        selected: true,
        className: 'text-accent underline-offset-4',
      },
      // set activated style
      {
        activated: true,
        variant: 'default',
        className:
          'bg-primary-foreground text-primary hover:bg-primary/90 hover:text-primary-foreground',
      },
      //@TODO: should define more activated style
      //
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// @TODO: Button의 prefix와 suffix에 icon의 key를 extract해서 넣어야함
const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & {
    fullWidth?: boolean;
  }
>(
  (
    {
      // cva
      variant,
      size,
      radius,
      selected,
      activated,
      // tag props
      className,
      type = 'button',
      asChild = false,
      fullWidth,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, radius, selected, activated }),
          fullWidth && 'w-full',
          className,
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { getRoot } from './helper/get-root';

const containerVariant = cva(['flex', 'flex-col', 'items-center', 'shrink-0', 'grow'], {
  variants: {
    display: {
      none: 'hidden',
      block: 'block',
    },
  },
});

const containerInnerVariant = cva(['size-full'], {
  variants: {
    // check tailwind.config.js for max-width values
    size: {
      xs: 'max-w-screen-xs',
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

type ContainerElement = React.ElementRef<'div'>;

type ContainerOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof containerVariant> &
  VariantProps<typeof containerInnerVariant>;

type ContainerDivProps = ComponentPropsWithoutRef<'div'>;

type ContainerProps = ContainerOwnProps & ContainerDivProps;

const Container = forwardRef<ContainerElement, ContainerProps>((props, forwardedRef) => {
  const {
    // cva
    size,
    display,
    // Container
    asChild,
    children: childrenProp,
    className,
    ...containerProps
  } = props;

  const { Root: ContainerRoot, children } = getRoot({
    asChild,
    children: childrenProp,
    parent: asChild ? Slot : 'div',
  });

  return (
    <ContainerRoot
      {...containerProps}
      ref={forwardedRef}
      className={cn(
        containerVariant({
          display,
        }),
        className,
      )}
    >
      <div
        className={cn(
          containerInnerVariant({
            size,
          }),
        )}
      >
        {children}
      </div>
    </ContainerRoot>
  );
});
Container.displayName = 'Container';

export { Container };
export type { ContainerProps };

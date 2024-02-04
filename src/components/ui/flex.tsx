import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const flexVariant = cva(['box-border'], {
  variants: {
    display: {
      flex: 'flex',
      'inline-flex': 'inline-flex',
      none: 'hidden',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      'row-reverse': 'flex-row-reverse',
      'column-reverse': 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
    },
    wrap: {
      wrap: 'flex-wrap',
      'no-wrap': 'flex-nowrap',
      'wrap-reverse': 'flex-wrap-reverse',
    },
    gap: {
      '0.5': 'gap-2',
      '1': 'gap-4',
      '1.5': 'gap-6',
      '2': 'gap-8',
      '2.25': 'gap-9',
      '3.5': 'gap-14',
    },
  },
  defaultVariants: {
    display: 'flex',
    justify: 'start',
  },
});

type FlexElement = React.ElementRef<'div'>;
type FlexOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof flexVariant>;

type FlexAsChildProps = { asChild?: true; as?: never } & ComponentPropsWithoutRef<'div'>;
type FlexDivProps = { as?: 'div'; asChild?: false } & ComponentPropsWithoutRef<'div'>;
type FlexSpanProps = { as: 'span'; asChild?: false } & ComponentPropsWithoutRef<'span'>;
type FlexProps = FlexOwnProps & (FlexAsChildProps | FlexSpanProps | FlexDivProps);

const Flex = forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const {
    // cva
    // @TODO: make util to extract cva props from props
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    // flexProps
    className,
    asChild,
    as: Tag = 'div',
    ...flexProps
  } = props;

  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      {...flexProps}
      ref={forwardedRef}
      className={cn(
        flexVariant({
          display,
          direction,
          align,
          justify,
          wrap,
          gap,
        }),
        className,
      )}
    />
  );
});
Flex.displayName = 'Flex';

export { Flex };
export type { FlexProps };

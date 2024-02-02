import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const textVariant = cva([], {
  variants: {
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      // TODO: 38.19px로 figma에서 확인했음
      '32': 'text-[2rem] leading-[38px]',
      '16': 'text-[1rem] leading-[20px]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      // @TODO: dynamic color?
      inherit: 'text-inherit',
      'gray/500': 'text-gray-500',
      white: 'text-white',
    },
  },
  defaultVariants: {
    weight: 'normal',
    size: '16',
    color: 'inherit',
  },
});

type TextElement = React.ElementRef<'span'>;
type TextOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof textVariant>;

type TextAsChildProps = { asChild: true; as?: never } & ComponentPropsWithoutRef<'span'>;
type TextSpanProps = { as?: 'span'; asChild?: false } & ComponentPropsWithoutRef<'span'>;
type TextDivProps = { as: 'div'; asChild?: false } & ComponentPropsWithoutRef<'div'>;
type TextLabelProps = { as: 'label'; asChild?: false } & ComponentPropsWithoutRef<'label'>;
type TextPProps = { as: 'p'; asChild?: false } & ComponentPropsWithoutRef<'p'>;
type TextProps = TextOwnProps &
  (TextAsChildProps | TextSpanProps | TextDivProps | TextLabelProps | TextPProps);

const Text = forwardRef<TextElement, TextProps>((props, forwardedRef) => {
  const {
    children,
    className,
    asChild,
    as: Tag = 'span',
    // cva
    // @TODO: make util to extract cva props from props
    weight,
    size,
    align,
    color,
    //
    ...rest
  } = props;

  return (
    <Slot
      {...rest}
      ref={forwardedRef}
      className={cn(
        textVariant({
          weight,
          size,
          align,
          color,
        }),
        className,
      )}
    >
      {asChild ? children : <Tag>{children}</Tag>}
    </Slot>
  );
});
Text.displayName = 'Text';

export { Text };
export type { TextProps };

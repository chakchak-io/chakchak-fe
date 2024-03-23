import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const textVariant = cva(['m-0'], {
  variants: {
    font: {
      pretendard: 'font-pretendard',
      // @TODO: add font sf-pro
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      '32': 'text-[2rem] leading-[38px]',
      // title/title01
      '24': 'text-[1.5rem] leading-[30px]',
      // title/title02
      '22': 'text-[1.375rem] leading-[26px]',
      // title/title04
      '18': 'text-[1.125rem] leading-[22px]',
      // body/body01
      '20': 'text-[1.25rem] leading-[24px]',
      // body/body02
      '16': 'text-[1rem] leading-[20px]',
      // body/body03
      '14': 'text-[0.875rem] leading-[18px]',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      // @TODO: dynamic color?
      inherit: 'text-inherit',
      // @TODO: dynamic color?
      primary: 'text-primary',
      'primary/300': 'text-primary-300',
      'primary-foreground': 'text-primary-foreground',
      destructive: 'text-destructive',
      'destructive-foreground': 'text-destructive-foreground',
      'gray/400': 'text-gray-400',
      'gray/500': 'text-gray-500',
      // @TODO: check gray/600 color code
      // @TODO: check gray/600 color code
      'gray/600': 'text-gray-600',
      'gray/800': 'text-gray-800',
      'gray/900': 'text-gray-900',
      white: 'text-white',
      black: 'text-black',
      'slate/500': 'text-slate-500',
      'slate/700': 'text-slate-700',
      'slate/900': 'text-slate-900',
    },
  },
  defaultVariants: {
    font: 'pretendard',
    weight: 'normal',
    size: '16',
    color: 'inherit',
  },
});

type TextElement = React.ElementRef<'span'>;
type TextOwnProps = {
  asChild?: boolean;
} & VariantProps<typeof textVariant>;

type TextAsChildProps = {
  asChild: true;
  as?: never;
} & ComponentPropsWithoutRef<'span'>;
type TextSpanProps = {
  as?: 'span';
  asChild?: false;
} & ComponentPropsWithoutRef<'span'>;
type TextDivProps = {
  as: 'div';
  asChild?: false;
} & ComponentPropsWithoutRef<'div'>;
type TextLabelProps = {
  as: 'label';
  asChild?: false;
} & ComponentPropsWithoutRef<'label'>;
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
    font,
    weight,
    size,
    align,
    color,
    //
    ...textProps
  } = props;

  return (
    <Slot
      {...textProps}
      ref={forwardedRef}
      className={cn(
        textVariant({
          font,
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

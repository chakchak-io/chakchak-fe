import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgActionEmail = (
  { size = '24', sizePx, color = 'currentColor', ...props }: IconProps,
  ref: Ref<SVGSVGElement>,
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size);
  const fill = color && colorMap[color];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={finalSize}
      height={finalSize}
      fill="none"
      viewBox="0 0 20 20"
      ref={ref}
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.125 5.625v8.75a1.875 1.875 0 0 1-1.875 1.875H3.75a1.875 1.875 0 0 1-1.875-1.875v-8.75m16.25 0A1.875 1.875 0 0 0 16.25 3.75H3.75a1.875 1.875 0 0 0-1.875 1.875m16.25 0v.202a1.88 1.88 0 0 1-.892 1.597l-6.25 3.846a1.88 1.88 0 0 1-1.966 0l-6.25-3.845a1.88 1.88 0 0 1-.892-1.597v-.203"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgActionEmail);
const Memo = memo(ForwardRef);
export default Memo;

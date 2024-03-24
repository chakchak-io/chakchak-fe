import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgChevronRight = (
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
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 18 6-6-6-6"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgChevronRight);
const Memo = memo(ForwardRef);
export default Memo;

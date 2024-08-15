import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgCaretLeft = (
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
      fill={fill}
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        stroke={fill}
        d="M13.756 7.044a.22.22 0 0 1 0 .312l-4.291 4.29L9.11 12l.354.354 4.29 4.29a.22.22 0 0 1-.31.312l-4.8-4.8a.22.22 0 0 1 0-.312l4.8-4.8a.22.22 0 0 1 .31 0Z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCaretLeft);
const Memo = memo(ForwardRef);
export default Memo;

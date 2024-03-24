import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgNaviTicket = (
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
      viewBox="0 0 32 32"
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        d="m20.773 22.4-4.774-3.066-4.773 3.066 1.44-5.493-4.387-3.573 5.667-.347 2.053-5.253 2.054 5.253 5.666.347-4.386 3.573M26.666 16a2.667 2.667 0 0 1 2.667-2.666V8a2.667 2.667 0 0 0-2.667-2.666H5.333A2.667 2.667 0 0 0 2.666 8v5.334a2.667 2.667 0 1 1 0 5.333V24a2.667 2.667 0 0 0 2.667 2.667h21.333A2.666 2.666 0 0 0 29.333 24v-5.333A2.666 2.666 0 0 1 26.666 16"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNaviTicket);
const Memo = memo(ForwardRef);
export default Memo;

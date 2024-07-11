import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgRightArrow = (
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
        fill={fill}
        d="m13.125 19.3 6.6-6.6q.15-.15.213-.325T20 12t-.063-.375a.9.9 0 0 0-.212-.325l-6.6-6.6a.98.98 0 0 0-.688-.287.93.93 0 0 0-.712.287.94.94 0 0 0-.313.688.93.93 0 0 0 .288.712l4.9 4.9H5.425a.97.97 0 0 0-.713.288.96.96 0 0 0-.287.712.97.97 0 0 0 .287.713.96.96 0 0 0 .713.287H16.6l-4.9 4.9a1 1 0 0 0-.288.7.87.87 0 0 0 .288.7q.275.3.7.3t.725-.3"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgRightArrow);
const Memo = memo(ForwardRef);
export default Memo;

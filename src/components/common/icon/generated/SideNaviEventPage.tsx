import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgSideNaviEventPage = (
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
      viewBox="0 0 20 20"
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M6.508 1.667h6.985c2.574 0 4.007 1.483 4.007 4.024V14.3c0 2.583-1.433 4.033-4.008 4.033H6.509c-2.533 0-4.008-1.45-4.008-4.033V5.69c0-2.541 1.475-4.024 4.008-4.024m.225 3.883v-.008h2.491c.36 0 .651.291.651.649 0 .367-.292.659-.65.659H6.732a.65.65 0 0 1 0-1.3m0 5.067h6.534a.65.65 0 0 0 0-1.301H6.733a.651.651 0 0 0 0 1.3m0 3.808h6.534a.65.65 0 0 0 .583-.65.654.654 0 0 0-.583-.659H6.733a.662.662 0 0 0-.625 1.008.65.65 0 0 0 .625.3"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviEventPage);
const Memo = memo(ForwardRef);
export default Memo;

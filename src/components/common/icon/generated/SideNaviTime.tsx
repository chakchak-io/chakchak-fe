import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgSideNaviTime = (
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
        d="M10 18.334A8.33 8.33 0 0 1 1.665 10c0-4.6 3.733-8.333 8.333-8.333A8.33 8.33 0 0 1 18.333 10a8.326 8.326 0 0 1-8.334 8.334m2.658-5.242a.618.618 0 0 0 .858-.217.63.63 0 0 0-.217-.858l-2.966-1.767V6.4a.624.624 0 1 0-1.25 0v4.209c0 .216.116.416.308.533z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviTime);
const Memo = memo(ForwardRef);
export default Memo;

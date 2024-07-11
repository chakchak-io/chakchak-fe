import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgContentsCheck = (
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
      <g clipPath="url(#contents-check_svg__a)">
        <path
          fill={fill}
          fillRule="evenodd"
          d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24m5.785-14.713a1.125 1.125 0 1 0-1.82-1.324L10.74 15.15l-2.82-2.82a1.125 1.125 0 1 0-1.59 1.591l3.75 3.75a1.125 1.125 0 0 0 1.706-.134z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="contents-check_svg__a">
          <path fill={fill} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgContentsCheck);
const Memo = memo(ForwardRef);
export default Memo;

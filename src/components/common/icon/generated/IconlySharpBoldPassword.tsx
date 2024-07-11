import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgIconlySharpBoldPassword = (
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
        fillRule="evenodd"
        d="M17.76 14.602h-1.5V12.75h-1.328v1.852h-1.5V12.75h-2.116a2.6 2.6 0 0 1-2.479 1.852A2.604 2.604 0 0 1 6.236 12a2.605 2.605 0 0 1 2.601-2.602 2.6 2.6 0 0 1 2.479 1.852h6.444zM2.25 21.75h19.5V2.25H2.25z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M8.84 10.898c-.61 0-1.105.494-1.105 1.102a1.103 1.103 0 0 0 2.205 0c0-.607-.494-1.102-1.1-1.102"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconlySharpBoldPassword);
const Memo = memo(ForwardRef);
export default Memo;

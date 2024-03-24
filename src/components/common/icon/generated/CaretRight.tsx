import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgCaretRight = (
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
        d="m7.083 17.012-1.178-1.179L11.738 10 5.905 4.167l1.178-1.179L14.095 10z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgCaretRight);
const Memo = memo(ForwardRef);
export default Memo;

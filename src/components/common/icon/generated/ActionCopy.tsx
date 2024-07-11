import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgActionCopy = (
  { size = '24', sizePx, color = 'currentColor', ...props }: IconProps,
  ref: Ref<SVGSVGElement>,
) => {
  const finalSize = sizePx ? sizePx : convertSizeToPx(size);
  const fill = color && colorMap[color];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 20 20"
      width={finalSize}
      height={finalSize}
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M4.861 5.513A1.07 1.07 0 0 0 3.788 6.58v9.402c0 .59.48 1.068 1.073 1.068h6.869a1.07 1.07 0 0 0 1.073-1.068V9.426c0-.284-.113-.555-.314-.756L9.63 5.826a1.08 1.08 0 0 0-.759-.313zM2.5 6.58a2.356 2.356 0 0 1 2.361-2.35h4.011c.626 0 1.227.247 1.67.688l2.857 2.845c.443.44.692 1.038.692 1.662v6.557a2.356 2.356 0 0 1-2.361 2.35H4.86a2.356 2.356 0 0 1-2.361-2.35z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M5.934 2.308c0-.354.289-.641.644-.641h3.582c.626 0 1.227.247 1.67.688l4.145 4.127c.443.44.692 1.038.692 1.662v6.13a.643.643 0 0 1-.644.64.64.64 0 0 1-.644-.64v-6.13c0-.284-.113-.555-.315-.756L10.92 3.261a1.08 1.08 0 0 0-.76-.312H6.58a.64.64 0 0 1-.645-.641"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgActionCopy);
const Memo = memo(ForwardRef);
export default Memo;

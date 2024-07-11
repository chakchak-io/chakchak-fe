import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgSideNaviTicket = (
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
      viewBox="0 0 20 20"
      ref={ref}
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.125 4.063c0-.518.42-.938.938-.938h3.75c.517 0 .937.42.937.938v3.75c0 .517-.42.937-.937.937h-3.75a.937.937 0 0 1-.938-.937zm0 8.125c0-.518.42-.938.938-.938h3.75c.517 0 .937.42.937.938v3.75c0 .517-.42.937-.937.937h-3.75a.94.94 0 0 1-.938-.937zm8.125-8.126c0-.517.42-.937.938-.937h3.75c.517 0 .937.42.937.938v3.75c0 .517-.42.937-.937.937h-3.75a.937.937 0 0 1-.938-.937z"
      />
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.625 5.625h.625v.625h-.625zm0 8.125h.625v.625h-.625zm8.125-8.125h.625v.625h-.625zm-2.5 5.625h.625v.625h-.625zm0 5h.625v.625h-.625zm5-5h.625v.625h-.625zm0 5h.625v.625h-.625zm-2.5-2.5h.625v.625h-.625z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviTicket);
const Memo = memo(ForwardRef);
export default Memo;

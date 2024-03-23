import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgSideNaviEventEdit = (
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
        d="m7.814 16.69 7.322-9.469c.398-.51.54-1.1.406-1.702-.114-.546-.45-1.066-.955-1.46l-1.229-.976c-1.07-.851-2.396-.762-3.157.215L9.38 4.364a.315.315 0 0 0 .053.439l2.122 1.702a.88.88 0 0 1 .274.528.787.787 0 0 1-.68.869.7.7 0 0 1-.54-.152L8.424 6.012a.26.26 0 0 0-.354.045l-5.19 6.718c-.337.421-.452.968-.337 1.496l.663 2.876c.036.152.168.26.328.26l2.918-.036a1.75 1.75 0 0 0 1.362-.681m4.086-.896h4.758c.464 0 .842.383.842.853a.85.85 0 0 1-.842.853H11.9a.85.85 0 0 1-.842-.853c0-.47.377-.853.842-.853"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviEventEdit);
const Memo = memo(ForwardRef);
export default Memo;

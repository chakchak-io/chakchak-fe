import { forwardRef, memo, Ref } from 'react';

import { colorMap } from '@/components/design-token/color';

import type { IconProps } from '../types';
import { convertSizeToPx } from '../utils';
const SvgSideNaviDashboard = (
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
        d="M6.11 1.667h7.782c2.834 0 4.434 1.607 4.443 4.442v7.783c0 2.833-1.609 4.442-4.443 4.442H6.11c-2.835 0-4.442-1.609-4.442-4.442V6.109c0-2.835 1.607-4.442 4.442-4.442m3.932 13.217c.36 0 .659-.267.692-.625V5.767a.68.68 0 0 0-.316-.658.7.7 0 0 0-1.068.658v8.492a.7.7 0 0 0 .692.625m3.834 0c.35 0 .65-.267.692-.625v-2.734a.699.699 0 0 0-1.067-.658.67.67 0 0 0-.316.658v2.734a.69.69 0 0 0 .691.625m-7.026-.625a.69.69 0 0 1-.691.625.69.69 0 0 1-.691-.625V8.5a.7.7 0 0 1 .325-.658.69.69 0 0 1 .733 0c.224.142.35.4.324.658z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviDashboard);
const Memo = memo(ForwardRef);
export default Memo;

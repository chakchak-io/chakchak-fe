import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgBrandLogo = (
  { size = "24", sizePx, color = "currentColor", ...props }: IconProps,
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
      viewBox="0 0 32 32"
      ref={ref}
      {...props}
    >
      <g clipPath="url(#brand-logo_svg__a)">
        <path
          stroke="#FF6A00"
          strokeWidth={4.83}
          d="m1.812 7.428 8 8.572-8 8.571"
        />
        <path
          fill="#4358E5"
          d="M12.72 31.693a16.1 16.1 0 0 1-8.226-4.38l3.602-3.586a11 11 0 0 0 5.618 2.991c2.13.422 4.336.205 6.341-.622a10.97 10.97 0 0 0 4.925-4.025 10.9 10.9 0 0 0 0-12.142 10.97 10.97 0 0 0-4.925-4.025 11 11 0 0 0-6.34-.622 11 11 0 0 0-5.62 2.99l-3.6-3.586A16.09 16.09 0 0 1 15.954 0c2.066.013 4.121.423 6.05 1.218a16.05 16.05 0 0 1 7.21 5.893A15.95 15.95 0 0 1 31.923 16c0 3.165-.943 6.258-2.708 8.89a16.05 16.05 0 0 1-7.21 5.892 16.13 16.13 0 0 1-9.284.91"
        />
      </g>
      <defs>
        <clipPath id="brand-logo_svg__a">
          <path fill="#fff" d="M0 0h32v32H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
const ForwardRef = forwardRef(SvgBrandLogo);
const Memo = memo(ForwardRef);
export default Memo;

import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgPlus = (
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
      viewBox="0 0 16 16"
      ref={ref}
      {...props}
    >
      <path
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 3.333v9.334M3.834 8h9.333"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPlus);
const Memo = memo(ForwardRef);
export default Memo;

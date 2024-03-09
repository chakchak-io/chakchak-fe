import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgSideNaviDashboard02 = (
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
      viewBox="0 0 20 20"
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M1.875 1.875a.625.625 0 0 0 0 1.25H2.5v8.75a2.5 2.5 0 0 0 2.5 2.5h1.008l-.976 2.927a.625.625 0 1 0 1.186.396l.274-.823h7.016l.275.823a.625.625 0 0 0 1.185-.396l-.976-2.927H15a2.5 2.5 0 0 0 2.5-2.5v-8.75h.625a.625.625 0 1 0 0-1.25zm5.033 13.75.417-1.25h5.35l.417 1.25zm6.217-10a.625.625 0 1 0-1.25 0v5a.624.624 0 1 0 1.25 0zm-2.5 1.875a.625.625 0 1 0-1.25 0v3.125a.625.625 0 1 0 1.25 0zm-2.5 1.875a.625.625 0 0 0-1.25 0v1.25a.625.625 0 1 0 1.25 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviDashboard02);
const Memo = memo(ForwardRef);
export default Memo;

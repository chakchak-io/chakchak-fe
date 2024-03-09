import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgSideNaviSurvet = (
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
        d="M6.252 5h5.94A2.81 2.81 0 0 1 15 7.813v7.812a2.5 2.5 0 0 0 2.5-2.5V5.09c0-1.254-.937-2.342-2.22-2.45q-.28-.023-.56-.042A2.5 2.5 0 0 0 12.5 1.25h-1.25a2.5 2.5 0 0 0-2.219 1.348q-.281.02-.56.042C7.218 2.746 6.294 3.785 6.251 5m4.998-2.5A1.25 1.25 0 0 0 10 3.75h3.75A1.25 1.25 0 0 0 12.5 2.5z"
        clipRule="evenodd"
      />
      <path
        fill={fill}
        fillRule="evenodd"
        d="M2.5 7.813c0-.864.7-1.563 1.563-1.563h8.125c.863 0 1.562.7 1.562 1.563v9.375c0 .862-.7 1.562-1.562 1.562H4.062A1.563 1.563 0 0 1 2.5 17.188zM5 10a.625.625 0 0 1 .625-.625h.007a.625.625 0 0 1 .625.625v.007a.625.625 0 0 1-.625.625h-.007A.625.625 0 0 1 5 10.007zm1.875 0a.625.625 0 0 1 .625-.625h3.125a.625.625 0 1 1 0 1.25H7.5A.625.625 0 0 1 6.875 10M5 12.5a.625.625 0 0 1 .625-.625h.007a.625.625 0 0 1 .625.625v.007a.625.625 0 0 1-.625.625h-.007A.625.625 0 0 1 5 12.507zm1.875 0a.625.625 0 0 1 .625-.625h3.125a.624.624 0 1 1 0 1.25H7.5a.625.625 0 0 1-.625-.625M5 15a.625.625 0 0 1 .625-.625h.007a.625.625 0 0 1 .625.625v.007a.625.625 0 0 1-.625.625h-.007A.625.625 0 0 1 5 15.007zm1.875 0a.625.625 0 0 1 .625-.625h3.125a.624.624 0 1 1 0 1.25H7.5A.625.625 0 0 1 6.875 15"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgSideNaviSurvet);
const Memo = memo(ForwardRef);
export default Memo;

import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconlySharpBoldCalendar = (
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
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M16.735 3.845v-1.72h-1.5v4.55h-1v-2.83h-4.97v-1.72h-1.5v4.55h-1v-2.83h-3.59v5.13h17.65v-5.13zM8.645 16.185v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm4.11 3.59v1.5h-1.5l-.01-1.5zm0-3.59v1.5h-1.5l-.01-1.5zm-13.69 9.28h17.65v-11.4H3.175z"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconlySharpBoldCalendar);
const Memo = memo(ForwardRef);
export default Memo;

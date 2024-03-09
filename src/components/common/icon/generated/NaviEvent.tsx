import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgNaviEvent = (
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
      <path
        fill={fill}
        d="M23.891 19.094a1.47 1.47 0 0 0-.425 1.293l1.185 6.56a1.44 1.44 0 0 1-.6 1.44 1.47 1.47 0 0 1-1.56.107l-5.905-3.08a1.5 1.5 0 0 0-.667-.175h-.361a1.1 1.1 0 0 0-.36.12L9.29 28.453c-.292.147-.622.2-.946.147a1.48 1.48 0 0 1-1.187-1.695l1.187-6.56a1.49 1.49 0 0 0-.426-1.305l-4.814-4.666a1.44 1.44 0 0 1-.36-1.507 1.5 1.5 0 0 1 1.186-1l6.627-.962a1.48 1.48 0 0 0 1.173-.811l2.92-5.987q.105-.203.267-.36l.12-.093a.9.9 0 0 1 .214-.174l.146-.053.226-.094h.562c.501.052.942.353 1.173.8l2.959 5.96c.213.437.628.74 1.106.813l6.627.96c.56.08 1.028.468 1.214 1a1.45 1.45 0 0 1-.387 1.508z"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNaviEvent);
const Memo = memo(ForwardRef);
export default Memo;

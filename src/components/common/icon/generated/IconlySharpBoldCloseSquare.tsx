import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgIconlySharpBoldCloseSquare = (
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
        d="M15.461 14.389 14.4 15.45l-2.401-2.399-2.4 2.396-1.06-1.061 2.399-2.395-2.399-2.398L9.6 8.532l2.4 2.399 2.401-2.397 1.06 1.062-2.4 2.395zM12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgIconlySharpBoldCloseSquare);
const Memo = memo(ForwardRef);
export default Memo;

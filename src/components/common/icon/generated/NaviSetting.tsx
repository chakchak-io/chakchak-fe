import { forwardRef, memo, Ref } from "react";

import { colorMap } from "@/components/design-token/color";

import type { IconProps } from "../types";
import { convertSizeToPx } from "../utils";
const SvgNaviSetting = (
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
        fillRule="evenodd"
        d="M27.204 18.107c.477.253.845.653 1.104 1.053.504.827.463 1.84-.028 2.734l-.954 1.6a2.84 2.84 0 0 1-2.411 1.386 2.84 2.84 0 0 1-1.445-.4c-.354-.226-.763-.306-1.199-.306-1.349 0-2.48 1.106-2.52 2.426 0 1.534-1.254 2.734-2.821 2.734h-1.853c-1.581 0-2.835-1.2-2.835-2.734-.027-1.32-1.158-2.426-2.507-2.426-.45 0-.858.08-1.199.306-.436.267-.981.4-1.444.4a2.85 2.85 0 0 1-2.426-1.386l-.94-1.6c-.504-.867-.531-1.907-.027-2.734.218-.4.627-.8 1.09-1.053.381-.187.627-.493.858-.853.682-1.147.273-2.654-.885-3.334a2.725 2.725 0 0 1-1.009-3.773l.913-1.573A2.833 2.833 0 0 1 8.51 7.56c1.185.64 2.725.214 3.42-.92.218-.373.34-.773.313-1.173a2.38 2.38 0 0 1 .382-1.413 2.93 2.93 0 0 1 2.412-1.387h1.921c1.008 0 1.921.56 2.425 1.387.246.4.41.893.368 1.413-.027.4.096.8.314 1.173.695 1.134 2.234 1.56 3.433.92a2.816 2.816 0 0 1 3.83 1.014l.912 1.573a2.703 2.703 0 0 1-1.008 3.773c-1.158.68-1.567 2.187-.872 3.334.218.36.463.666.845.853m-15.057-2.093c0 2.093 1.73 3.76 3.87 3.76 2.139 0 3.829-1.667 3.829-3.76s-1.69-3.774-3.83-3.774c-2.138 0-3.87 1.68-3.87 3.774"
        clipRule="evenodd"
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgNaviSetting);
const Memo = memo(ForwardRef);
export default Memo;

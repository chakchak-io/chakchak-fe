const template = ({ jsx, componentName, exports }, { tpl }) => {
  return tpl`
  import { forwardRef, memo, Ref } from "react";

  import { colorMap } from "@/components/design-token/color";

  import { convertSizeToPx } from "../utils"
  import type { IconProps } from "../types"

  const ${componentName} = (
    { size = "24", sizePx, color = "currentColor", ...props }: IconProps,
    ref: Ref<SVGSVGElement>  
  ) => {
    const finalSize = sizePx ? sizePx : convertSizeToPx(size)
    const fill = color && colorMap[color]
    return ${jsx}
  }

    ${exports}
  
`;
};

module.exports = template;

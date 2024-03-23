import type { SVGProps } from "react";

import { colorMap } from "@/components/design-token/color";

export const size = ["36", "32", "24", "20", "16", "12"] as const;
export type size = (typeof size)[number];

export interface IconBaseProps {
  color?: keyof typeof colorMap;
  size?: size;
  sizePx?: number;
}

export type IconProps = IconBaseProps & SVGProps<SVGSVGElement>;

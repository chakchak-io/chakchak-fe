import type { SVGProps } from "react";

import { colorMap } from "@/components/design-token/color";
export type size = "36" | "32" | "24" | "20" | "16" | "12";

export interface IconBaseProps {
  color?: keyof typeof colorMap;
  size?: size;
  sizePx?: number;
}

export type IconProps = IconBaseProps & SVGProps<SVGSVGElement>;

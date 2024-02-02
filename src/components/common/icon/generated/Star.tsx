import { Ref, forwardRef, memo } from "react"

import { PropsFrom } from "@/lib/typescript"

import Star from "../svg/star.svg"

type Props = PropsFrom<typeof Star>
type PropRef = SVGSVGElement

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGStar = (props: Props, ref: Ref<PropRef>) => <Star {...props} ref={ref} />
const Forwarded = forwardRef(SVGStar)
const Memo = memo(Forwarded)

export default Memo

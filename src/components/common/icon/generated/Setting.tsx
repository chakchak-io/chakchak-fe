import { Ref, forwardRef, memo } from "react"

import { PropsFrom } from "@/lib/typescript"

import Setting from "../svg/setting.svg"

type Props = PropsFrom<typeof Setting>
type PropRef = SVGSVGElement

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGSetting = (props: Props, ref: Ref<PropRef>) => <Setting {...props} ref={ref} />
const Forwarded = forwardRef(SVGSetting)
const Memo = memo(Forwarded)

export default Memo

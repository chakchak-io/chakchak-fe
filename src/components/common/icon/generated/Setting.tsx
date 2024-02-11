import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import Setting from '../svg/setting.svg';

type Props = PropsFromWithoutRef<typeof Setting>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGSetting = (props: Props, ref: Ref<PropRef>) => <Setting {...props} ref={ref} />;
const Forwarded = forwardRef(SVGSetting);
const Memo = memo(Forwarded);

export default Memo;

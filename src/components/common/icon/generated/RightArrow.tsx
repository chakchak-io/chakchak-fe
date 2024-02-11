import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import RightArrow from '../svg/right-arrow.svg';

type Props = PropsFromWithoutRef<typeof RightArrow>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGRightArrow = (props: Props, ref: Ref<PropRef>) => <RightArrow {...props} ref={ref} />;
const Forwarded = forwardRef(SVGRightArrow);
const Memo = memo(Forwarded);

export default Memo;

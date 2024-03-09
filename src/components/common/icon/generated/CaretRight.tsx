import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import CaretRight from '../svg/caret-right.svg';

type Props = PropsFromWithoutRef<typeof CaretRight>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGCaretRight = (props: Props, ref: Ref<PropRef>) => <CaretRight {...props} ref={ref} />;
const Forwarded = forwardRef(SVGCaretRight);
const Memo = memo(Forwarded);

export default Memo;

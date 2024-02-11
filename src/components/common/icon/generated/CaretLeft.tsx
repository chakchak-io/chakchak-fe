import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import CaretLeft from '../svg/caret-left.svg';

type Props = PropsFromWithoutRef<typeof CaretLeft>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGCaretLeft = (props: Props, ref: Ref<PropRef>) => <CaretLeft {...props} ref={ref} />;
const Forwarded = forwardRef(SVGCaretLeft);
const Memo = memo(Forwarded);

export default Memo;

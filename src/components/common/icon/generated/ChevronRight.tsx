import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import ChevronRight from '../svg/chevron-right.svg';

type Props = PropsFromWithoutRef<typeof ChevronRight>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGChevronRight = (props: Props, ref: Ref<PropRef>) => <ChevronRight {...props} ref={ref} />;
const Forwarded = forwardRef(SVGChevronRight);
const Memo = memo(Forwarded);

export default Memo;

import { Ref, forwardRef, memo } from 'react';

import { PropsFrom } from '@/lib/react-typescript';

import Plus from '../svg/plus.svg';

type Props = PropsFrom<typeof Plus>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGPlus = (props: Props, ref: Ref<PropRef>) => <Plus {...props} ref={ref} />;
const Forwarded = forwardRef(SVGPlus);
const Memo = memo(Forwarded);

export default Memo;

import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import Time from '../svg/time.svg';

type Props = PropsFromWithoutRef<typeof Time>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGBrandLogo = (props: Props, ref: Ref<PropRef>) => <Time {...props} ref={ref} />;
const Forwarded = forwardRef(SVGBrandLogo);
const Memo = memo(Forwarded);

export default Memo;

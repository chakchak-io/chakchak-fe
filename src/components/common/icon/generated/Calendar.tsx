import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import Calendar from '../svg/calendar.svg';

type Props = PropsFromWithoutRef<typeof Calendar>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGBrandLogo = (props: Props, ref: Ref<PropRef>) => <Calendar {...props} ref={ref} />;
const Forwarded = forwardRef(SVGBrandLogo);
const Memo = memo(Forwarded);

export default Memo;

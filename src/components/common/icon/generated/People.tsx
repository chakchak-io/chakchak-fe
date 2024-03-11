import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import People from '../svg/people.svg';

type Props = PropsFromWithoutRef<typeof People>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGBrandLogo = (props: Props, ref: Ref<PropRef>) => <People {...props} ref={ref} />;
const Forwarded = forwardRef(SVGBrandLogo);
const Memo = memo(Forwarded);

export default Memo;

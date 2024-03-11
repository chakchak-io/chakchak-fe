import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import Survet from '../svg/survet.svg';

type Props = PropsFromWithoutRef<typeof Survet>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGBrandLogo = (props: Props, ref: Ref<PropRef>) => <Survet {...props} ref={ref} />;
const Forwarded = forwardRef(SVGBrandLogo);
const Memo = memo(Forwarded);

export default Memo;

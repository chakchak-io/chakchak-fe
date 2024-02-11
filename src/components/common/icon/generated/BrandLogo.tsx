import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import BrandLogo from '../svg/brand-logo.svg';

type Props = PropsFromWithoutRef<typeof BrandLogo>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGBrandLogo = (props: Props, ref: Ref<PropRef>) => <BrandLogo {...props} ref={ref} />;
const Forwarded = forwardRef(SVGBrandLogo);
const Memo = memo(Forwarded);

export default Memo;

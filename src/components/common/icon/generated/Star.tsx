import { forwardRef, memo, Ref } from 'react';

import { PropsFromWithoutRef } from '@/lib/react-typescript';

import Star from '../svg/star.svg';

type Props = PropsFromWithoutRef<typeof Star>;
type PropRef = SVGSVGElement;

// @TODO: apply default setting for icon
// @TODO: apply auto generator
const SVGStar = ({ fill = 'currentColor', ...rest }: Props, ref: Ref<PropRef>) => (
  <Star fill={fill} {...rest} ref={ref} />
);
const Forwarded = forwardRef(SVGStar);
const Memo = memo(Forwarded);

export default Memo;
